import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Proyect } from '../interfaces/proyect';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProyectsService {
  private proyectsUrl = 'http://localhost:5000/proyects';

  constructor(private http: HttpClient) {}

  getProyects(): Observable<Proyect[]> {
    return this.http.get<Proyect[]>(this.proyectsUrl);
  }
}
