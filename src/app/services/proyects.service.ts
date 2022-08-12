import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Proyect } from '../interfaces/proyect';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private proyectsUrl = 'http://localhost:8080/projects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getProyects(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.proyectsUrl);
  }

  addProyect(proyect: Proyect): Observable<Proyect> {
    return this.http.post<Proyect>(this.proyectsUrl, proyect, this.httpOptions);
  }

  deleteProyect(proyect: Proyect): Observable<Proyect> {
    const url = `${this.proyectsUrl}/${proyect.id}`;
    return this.http.delete<Proyect>(url);
  }

  // Update changes made by the component
  saveChanges(proyect: Proyect): Observable<Proyect> {
    return this.http.put<Proyect>(this.proyectsUrl, proyect, this.httpOptions);
  }
}
