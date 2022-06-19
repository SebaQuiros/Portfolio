import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Experience } from 'src/app/interfaces/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiencesUrl = 'http://localhost:5000/experiences';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.experiencesUrl);
  }
}
