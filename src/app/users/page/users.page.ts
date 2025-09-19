import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { selectAllUsers, selectError, selectIsLoading } from '../store/users.selectors';
import { Store } from '@ngrx/store';

import { loadUsers } from '../store/users.actions';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css'],
})
export class UserListComponent implements OnInit {
  users$;
  isLoading$;
  error$;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    // this.retryLoad();
    this.store.dispatch(loadUsers());
  }

  retryLoad(): void {
    // this.store.dispatch(loadUsers());
  }
}
