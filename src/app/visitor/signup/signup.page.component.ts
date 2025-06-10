import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Visitor } from '../../core/entity/user.interface';
import { AuthenticationService } from '../../core/port/authentication.service';
import { UserStore } from '../../core/store/user.store';
import { RegisterUserUseCaseService } from './register-user.use-case.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.scss',
})
export class SignupPageComponent {
  readonly store = inject(UserStore);
  readonly authenticationService = inject(AuthenticationService);
  readonly #registerUserUseCase = inject(RegisterUserUseCaseService);
  readonly #router = inject(Router);

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword(),
  );

  onSubmit() {
    const visitor: Visitor = {
      name: this.name(),
      email: this.email(),
      password: this.password(),
    };
    this.#registerUserUseCase
      .execute(visitor)
      .then(() => this.#router.navigate(['/app/dashboard']));
  }
}
