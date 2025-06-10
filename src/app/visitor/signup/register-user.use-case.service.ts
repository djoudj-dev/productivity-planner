import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User, Visitor } from 'src/app/core/entity/user.interface';
import { AuthenticationService } from 'src/app/core/port/authentication.service';
import { UserService } from 'src/app/core/port/user.service';
import { UserStore } from 'src/app/core/store/user.store';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCaseService {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);

  async execute(visitor: Visitor): Promise<User | Error> {
    const name = visitor.name;
    const email = visitor.email;
    const password = visitor.password;

    const response = await firstValueFrom(
      this.#authenticationService.register(email, password),
    );

    const jwtToken = response.jwtToken;
    const id = response.userId;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('email', email);

    const user: User = { id, name, email };
    await firstValueFrom(this.#userService.create(user, jwtToken));

    this.#userStore.register(user);

    return user;
  }
}
