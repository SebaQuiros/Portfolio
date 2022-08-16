import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationsUrl =
    'https://sebaquirosportfolio-backend.herokuapp.com/educations';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.educationsUrl);
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(
      this.educationsUrl,
      education,
      this.httpOptions
    );
  }

  deleteEducation(education: Education): Observable<Education> {
    const url = `${this.educationsUrl}/${education.id}`;
    return this.http.delete<Education>(url);
  }

  // Update changes made by the component
  saveChanges(education: Education): Observable<Education> {
    return this.http.put<Education>(
      this.educationsUrl,
      education,
      this.httpOptions
    );
  }
}
