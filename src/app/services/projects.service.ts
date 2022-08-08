import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Project } from '../interfaces/project';

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

  getprojects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  deleteproject(project: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.delete<Project>(url);
  }

  // Update changes made by the component
  saveChanges(project: Project): Observable<Project> {
    return this.http.put<Project>(this.projectsUrl, project, this.httpOptions);
  }
}
