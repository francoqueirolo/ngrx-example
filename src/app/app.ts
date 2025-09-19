import { Component, inject, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './users/page/users.page';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngrx-example');
}
