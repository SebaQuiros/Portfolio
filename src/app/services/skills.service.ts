import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { SkillSet } from '../interfaces/skill-set';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsUrl = 'http://localhost:5000/skills';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillSet[]> {
    return this.http.get<SkillSet[]>(this.skillsUrl);
  }

  // Gestión de cambios
  saveChanges(skills: SkillSet[]): Observable<any> {
    return this.http.put(this.skillsUrl, skills, this.httpOptions);
  }
}
