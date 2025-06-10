import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Visitor } from '@app/core/entity/user.interface';
import { UserStore } from '@app/core/store/user.store';
import { EmailAlreadyTakenError } from './domain/email-already-taken.error';
import { RegisterUserUseCase } from './domain/register-user.use-case';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.scss',
})
export class SignupPageComponent {
  readonly store = inject(UserStore);
  readonly #registerUserUseCase = inject(RegisterUserUseCase);
  readonly isLoading = signal(false);
  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');
  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword(),
  );

  readonly emailAlreadyTakenError = signal<EmailAlreadyTakenError | null>(null);
  readonly isEmailAlreadyTaken = computed(
    () => this.emailAlreadyTakenError()?.email === this.email(),
  );

  onSubmit() {
    const visitor: Visitor = {
      name: this.name(),
      email: this.email(),
      password: this.password(),
    };

    this.#registerUserUseCase
      .execute(visitor)
      .then(() => {
        // La redirection est gérée dans le use case
        console.log('Inscription réussie');
      })
      .catch((error: any) => {
        if (error instanceof EmailAlreadyTakenError) {
          this.emailAlreadyTakenError.set(error);
        } else {
          console.error("Erreur lors de l'inscription:", error);
        }
      });
  }
}
