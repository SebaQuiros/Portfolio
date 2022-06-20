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

  // Update changes made by the component
  saveChanges(skills: SkillSet[]): Observable<SkillSet[]> {
    console.log(skills); // Proof the array is returning with the edits.
    return this.http.patch<SkillSet[]>(
      this.skillsUrl,
      skills,
      this.httpOptions
    );
  }
}
