import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state'; // Asegúrate de que esta ruta sea correcta

// 1. Selector para obtener la rama completa del feature 'users'
export const selectUsersState = createFeatureSelector<UsersState>('users');

// 2. Selector para obtener solo la lista de usuarios
export const selectAllUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

// 3. Selector para obtener el estado de carga (isLoading)
export const selectIsLoading = createSelector(
  selectUsersState,
  (state) => state.isLoading
);

// 4. Selector para obtener el mensaje de error (error)  <-- ¡ESTE ES EL QUE FALTABA!
export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);
