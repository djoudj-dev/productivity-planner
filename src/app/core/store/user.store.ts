import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthenticationService } from '../port/authentication.service';

interface UserState {
  user: string | undefined;
}

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState<UserState>({
    user: undefined,
  }),
  withComputed((store) => {
    const isGoogleUser = computed(() =>
      store.user()?.email.endsWith('@google.com'),
    );

    return { isGoogleUser };
  }),
  withMethods(
    (store, authenticationService = inject(AuthenticationService)) => ({
      register: (username: string, email: string) => {
        authenticationService
          .register(username, email)
          .subscribe((response) => {
            patchState(store, {
              email: response.userId,
            });
          });
      },
    }),
  ),
);
