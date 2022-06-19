import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { SkillSet } from '../interfaces/skill-set';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsUrl = 'http://localhost:5000/skills';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<SkillSet[]> {
    return this.http.get<SkillSet[]>(this.skillsUrl);
  }

  // Menú de cambios.
  saveChanges() {
    console.log('Skill service: working');
  }
}
