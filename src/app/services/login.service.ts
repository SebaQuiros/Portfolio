import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser: User = {
    mailUser: '',
    passwordUser: '',
  };
  private loginUrl = 'https://sebaquirosportfolio-backend.herokuapp.com/login';
  private addUserUrl =
    'https://sebaquirosportfolio-backend.herokuapp.com/addUser';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(user: User) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  getLoginStatus(): Observable<boolean> {
    return this.http.post<boolean>(
      this.loginUrl,
      JSON.parse(localStorage.getItem('currentUser') || '{}'),
      this.httpOptions
    );
  }
}
