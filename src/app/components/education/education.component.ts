import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/interfaces/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  educations: Education[] = [];
  selectedEducation?: Education;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations() {
    this.educationService.getEducations().subscribe((educations) => {
      this.educations = educations;
      this.selectedEducation = educations[0];
    });
  }
  onSelect(education: Education): void {
    this.selectedEducation = education;
  }
  editStart() {
    this.editMode = true;
    console.log('Editing education');
  }
  editSave() {
    this.editMode = false;
  }
  editCancel() {
    this.editMode = false;
  }
}
