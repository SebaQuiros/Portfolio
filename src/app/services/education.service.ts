import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Experience } from '../interfaces/experience';
import { Education } from '../interfaces/education';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationsUrl = 'http://localhost:5000/educations';

  constructor(private http: HttpClient) {}

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.educationsUrl);
  }
}
