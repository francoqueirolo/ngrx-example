import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { usersReducer } from './users/store/users.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './users/store/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      users: usersReducer, //Registrar Reducer o grupo de reducers []
    }),
    // Opcional: Herramientas de desarrollo de NgRx
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    provideEffects([UsersEffects]), //Registrar Effects
  ],
};
