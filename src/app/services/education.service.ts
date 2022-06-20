import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationsUrl = 'http://localhost:5000/educations';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.educationsUrl);
  }

  // Gestión de cambios
  saveChanges(experiences: Education[]): Observable<Education[]> {
    return this.http.patch<Education[]>(
      this.educationsUrl,
      experiences,
      this.httpOptions
    );
  }
}
