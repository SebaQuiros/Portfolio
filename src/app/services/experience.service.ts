import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Experience } from 'src/app/interfaces/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiencesUrl =
    'https://sebaquirosportfolio-backend.herokuapp.com/experiences';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.experiencesUrl);
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(
      this.experiencesUrl,
      experience,
      this.httpOptions
    );
  }

  deleteExperience(experience: Experience): Observable<Experience> {
    const url = `${this.experiencesUrl}/${experience.id}`;
    return this.http.delete<Experience>(url);
  }

  // Update changes made by the component
  saveChanges(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(
      this.experiencesUrl,
      experience,
      this.httpOptions
    );
  }
}
