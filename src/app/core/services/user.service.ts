import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockUsers: User[] = [
    { id: 1, login: 'user1', avatar_url: 'https://via.placeholder.com/150', html_url: '' },
    { id: 2, login: 'user2', avatar_url: 'https://via.placeholder.com/150', html_url: '' },
    { id: 3, login: 'user3', avatar_url: 'https://via.placeholder.com/150', html_url: '' },
  ];

  private GITHUB_API_URL = 'https://api.github.com/users';
  private http: HttpClient = inject(HttpClient);

  getUsersMock(): Observable<User[]> {
    console.log('UserService: Simulando llamada a API...');
    return of(this.mockUsers).pipe(delay(1000));
  }

  getUsers(since: number = 0): Observable<User[]> {
    console.log(`UserService: Llamando a GitHub API...`);
    const url = `${this.GITHUB_API_URL}?per_page=100&since=${since}`;
    return this.http.get<User[]>(url);
  }

  constructor() {
    // console.log('UserService creado');
    // this.getUsers().subscribe((users) => {
    //   console.log(users);
    // });
  }
}
