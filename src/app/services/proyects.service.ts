import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { project } from '../interfaces/project';

@Injectable({
  providedIn: 'root',
})
export class projectsService {
  private projectsUrl = 'http://localhost:5000/projects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getprojects(): Observable<project[]> {
    return this.http.get<project[]>(this.projectsUrl);
  }

  deleteproject(project: project): Observable<project> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.delete<project>(url);
  }

  // Update changes made by the component
  saveChanges(project: project): Observable<project> {
    return this.http.put<project>(this.projectsUrl, project, this.httpOptions);
  }
}
