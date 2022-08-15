import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginStatus: boolean = false;
  private loginUrl = 'http://localhost:8080/login';
  private addUserUrl = 'http://localhost:8080/addUser';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  login(user: User): Observable<boolean> {
    console.log(user);
    return this.http.post<boolean>(this.loginUrl, user, this.httpOptions);
  }

  getLoginStatus(): boolean {
    return this.loginStatus;
  }
}
