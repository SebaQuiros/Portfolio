import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SkillSet } from '../interfaces/skill-set';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsUrl = 'http://localhost:8080/skills';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillSet[]> {
    return this.http.get<SkillSet[]>(this.skillsUrl);
  }

  // Update changes made by the component
  saveChanges(skillset: SkillSet): Observable<SkillSet> {
    return this.http.put<SkillSet>(this.skillsUrl, skillset, this.httpOptions);
  }
}
