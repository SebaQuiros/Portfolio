import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/interfaces/education';
import { EDUCATIONS } from 'src/app/mock-educations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations: Education[] = EDUCATIONS;
  selectedEducation: Education = EDUCATIONS[0];

  constructor() {}

  ngOnInit(): void {}

  onSelect(experience: Education): void {
    this.selectedEducation = experience;
  }
}
