import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/port/authentication.service';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { firstValueFrom } from 'rxjs';
import { InvalidCredentialError } from './invalid-credential.error';

@Injectable({
  providedIn: 'root',
})
export class LoginUserUseCase {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);
  readonly #router = inject(Router);

  async execute(email: string, password: string): Promise<void> {
    try {
      // 1. Authenticate existing user
      const response = await firstValueFrom(
        this.#authenticationService.login(email, password),
      );

      // 2. Throw an error if credentials are invalid
      if (response instanceof InvalidCredentialError) {
        throw response;
      }

      // 3. Add credentials information in webapp storage
      const { userId, jwtToken, jwtRefreshToken, expiresIn } = response;

      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('jwtRefreshToken', jwtRefreshToken);
      localStorage.setItem('expiresIn', expiresIn);

      // 4. Try to fetch user from Firestore
      let user;
      try {
        user = await firstValueFrom(this.#userService.fetch(userId, jwtToken));
      } catch (error: any) {
        // If user doesn't exist in Firestore (404), create it
        if (error.status === 404) {
          console.log(
            'Utilisateur non trouvé dans Firestore, création automatique...',
          );

          // Extract name from email for fallback
          const name = email.split('@')[0];
          const newUser = { id: userId, name, email };

          // Create user in Firestore
          await firstValueFrom(this.#userService.create(newUser, jwtToken));

          user = newUser;
          console.log('Utilisateur créé avec succès dans Firestore');
        } else {
          throw error;
        }
      }

      // 5. Add user in app store
      this.#userStore.load(user);

      // 6. Redirect user to dashboard
      this.#router.navigate(['/app/dashboard']);
    } catch (error: any) {
      console.error('Erreur lors de la connexion:', error);
      throw error;
    }
  }
}
