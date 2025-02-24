import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserStore } from '../../core/store/user.store';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.scss',
})
export class SignupPageComponent {
  readonly userStore = inject(UserStore);

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword(),
  );

  onSubmit() {}
}
