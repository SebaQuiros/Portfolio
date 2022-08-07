import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Proyect } from '../interfaces/proyect';

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private proyectsUrl = 'http://localhost:8080/proyects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getProyects(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.proyectsUrl);
  }

  // Update changes made by the component
  saveChanges(experiences: Proyect): Observable<Proyect[]> {
    return this.http.patch<Proyect[]>(
      this.proyectsUrl,
      experiences,
      this.httpOptions
    );
  }
}
