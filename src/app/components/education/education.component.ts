import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/interfaces/education';
import { EDUCATIONS } from 'src/app/mock-educations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations = EDUCATIONS;
  constructor() {}

  ngOnInit(): void {}

  selectedEducation: Education = EDUCATIONS[0];
  onSelect(experience: Education): void {
    this.selectedEducation = experience;
  }
}
