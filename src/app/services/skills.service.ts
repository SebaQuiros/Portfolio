import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SkillSet } from '../interfaces/skill-set';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsUrl =
    'https://sebaquirosportfolio-backend.herokuapp.com/skills';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillSet[]> {
    return this.http.get<SkillSet[]>(this.skillsUrl);
  }

  addSkillSet(skillSet: SkillSet): Observable<SkillSet> {
    return this.http.post<SkillSet>(this.skillsUrl, skillSet, this.httpOptions);
  }

  deleteSkillSet(skillSet: SkillSet): Observable<SkillSet> {
    const url = `${this.skillsUrl}/${skillSet.id}`;
    return this.http.delete<SkillSet>(url);
  }

  // Update changes made by the component
  saveChanges(skillset: SkillSet): Observable<SkillSet> {
    return this.http.put<SkillSet>(this.skillsUrl, skillset, this.httpOptions);
  }
}
