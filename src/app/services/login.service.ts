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
    // mailUser: 'sebaquiros@gmail.com',
    // passwordUser: 'seba',
  };
  private loginUrl = 'http://localhost:8080/login';
  private addUserUrl = 'http://localhost:8080/addUser';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(user: User) {
    this.currentUser = user;
    console.log(this.currentUser);
  }

  getLoginStatus(): Observable<boolean> {
    return this.http.post<boolean>(
      this.loginUrl,
      this.currentUser,
      this.httpOptions
    );
  }
}
