import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { About } from '../interfaces/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private aboutUrl = 'http://localhost:8080/about';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAbout(): Observable<About[]> {
    return this.http.get<About[]>(this.aboutUrl);
  }

  // Update changes made by the component
  saveChanges(about: About): Observable<About[]> {
    return this.http.put<About[]>(this.aboutUrl, about, this.httpOptions);
  }
}
