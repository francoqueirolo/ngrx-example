import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserService } from '../../core/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

@Injectable()
export class UsersEffects {
  private readonly actions$ = inject(Actions);
  private readonly userService = inject(UserService);

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),

      switchMap(() => {
        const random = Math.floor(Math.random() * 100000000 / 30);
        const users$ = this.userService.getUsers(random);
        if (!users$) {
          console.error('Effects: getUsersMock() returned undefined');
          return of(loadUsersFailure({ error: 'UserService returned undefined' }));
        }
        return users$.pipe(
          map((users) => {
            return loadUsersSuccess({ users });
          }),
          catchError((error: HttpErrorResponse) => {
            console.error('Effects: catchError error', error);

            const errorMessage = `Fallo de la API: ${error.status} - ${
              error.statusText || 'Error desconocido'
            }`;

            return of(loadUsersFailure({ error: errorMessage }));
          })
        );
      })
    );
  });
}
