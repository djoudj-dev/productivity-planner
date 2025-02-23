import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthenticationService } from '../authentication.service';

interface UserState {
  username: string;
  email: string;
}

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState<UserState>({
    username: '',
    email: '',
  }),
  withComputed((store) => {
    const isGoogleUser = computed(() => store.email().endsWith('@google.com'));

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
