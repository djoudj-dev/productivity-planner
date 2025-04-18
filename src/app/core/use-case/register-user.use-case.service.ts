import { inject, Injectable } from '@angular/core';
import { User, Visitor } from '../entity/user.interface';
import { AuthenticationService } from '../port/authentication.service';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../port/user.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCaseService {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  async execute(visitor: Visitor): Promise<User> {
    const response = await firstValueFrom(
      this.#authenticationService.register(visitor.email, visitor.password),
    );

    localStorage.setItem('jwtToken', response.jwtToken);
    localStorage.setItem('jwtRefreshToken', response.jwtRefreshToken);
    localStorage.setItem('expiresIn', response.expiresIn);

    const user: User = {
      id: response.userId,
      name: visitor.name,
      email: visitor.email,
    };

    await this.#userService.create(user, response.jwtToken);

    return user;
  }
}
