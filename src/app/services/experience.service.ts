import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Experience } from 'src/app/interfaces/experience';
import { EXPERIENCES } from 'src/app/mock-experiences';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getExperiences(): Observable<Experience[]> {
    const experiences = of(EXPERIENCES);
    return experiences;
  }
}
