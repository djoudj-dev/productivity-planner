import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthenticationFirebaseService } from './core/authentication-firebase.service';
import { AuthenticationService } from './core/authentication.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: AuthenticationService,
      useClass: AuthenticationFirebaseService,
    },
  ],
};
