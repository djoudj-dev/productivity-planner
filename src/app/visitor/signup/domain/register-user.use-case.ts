import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Visitor } from '@app/core/entity/user.interface';
import { AuthenticationService } from '@app/core/port/authentication.service';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { firstValueFrom } from 'rxjs';
import { EmailAlreadyTakenError } from './email-already-taken.error';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCase {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);
  readonly #router = inject(Router);

  async execute(visitor: Visitor): Promise<void> {
    try {
      // 1. Authenticate new visitor
      const { name, email, password } = visitor;

      console.log("Tentative d'inscription avec:", { email, password: '***' });

      const registerResponse = await firstValueFrom(
        this.#authenticationService.register(email, password),
      );

      // Vérifier si c'est une erreur
      if (registerResponse instanceof EmailAlreadyTakenError) {
        return Promise.reject(registerResponse);
      }

      // 2. Add credentials information in webapp storage
      const {
        userId: id,
        jwtToken,
        jwtRefreshToken,
        expiresIn,
      } = registerResponse;

      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('jwtRefreshToken', jwtRefreshToken);
      localStorage.setItem('expiresIn', expiresIn);

      // 3. Create new user in database
      console.log("Création de l'utilisateur dans Firestore...");
      const user: User = { id, name, email };
      await firstValueFrom(this.#userService.create(user, jwtToken));
      console.log('Utilisateur créé avec succès dans Firestore');

      // 4. Add user in app store
      console.log("Ajout de l'utilisateur dans le store...");
      this.#userStore.load(user);

      // 5. Redirect user to dashboard
      console.log('Redirection vers le dashboard...');
      this.#router.navigate(['/app/dashboard']);
    } catch (error: any) {
      console.error("Erreur détaillée lors de l'inscription:", {
        error,
        message: error?.message,
        status: error?.status,
        errorDetails: error?.error,
      });

      // Extraire le message d'erreur spécifique de Firebases
      if (error?.error?.error?.message) {
        const firebaseError = error.error.error.message;
        console.error("Message d'erreur Firebase:", firebaseError);

        // Traduire les erreurs courantes de Firebase
        switch (firebaseError) {
          case 'EMAIL_EXISTS':
            return Promise.reject(new EmailAlreadyTakenError(visitor.email));
          case 'INVALID_EMAIL':
            return Promise.reject(new Error('Adresse email invalide'));
          case 'WEAK_PASSWORD : Password should be at least 6 characters':
            return Promise.reject(
              new Error('Le mot de passe doit contenir au moins 6 caractères'),
            );
          case 'OPERATION_NOT_ALLOWED':
            return Promise.reject(
              new Error(
                "L'inscription par email/mot de passe n'est pas activée",
              ),
            );
          case 'Missing or insufficient permissions.':
            return Promise.reject(
              new Error(
                'Erreur de permissions. Veuillez réessayer dans quelques instants.',
              ),
            );
          default:
            return Promise.reject(
              new Error(`Erreur d'inscription: ${firebaseError}`),
            );
        }
      }

      return Promise.reject(
        new Error("Erreur inattendue lors de l'inscription"),
      );
    }
  }
}
