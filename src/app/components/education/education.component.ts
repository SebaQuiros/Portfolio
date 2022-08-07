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
  newParagraph: string = '';

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

  // Funciones de la sección.
  addEducation(education: Education) {
    this.educations.push(education);
  }
  deleteEducation(education: Education) {
    this.educations = this.educations.filter((e) => e !== education);
  }
  addParagraph(education: Education, paragraph: string) {
    if (paragraph) {
      education.description.push(paragraph);
    }
  }
  deleteParagraph(education: Education, paragraph: string) {
    education.description = education.description.filter(
      (t) => t !== paragraph
    );
  }
  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing skills');
  }
  saveChanges(): void {
    this.editMode = false;
    this.educations.forEach((education) =>
      this.educationService.saveChanges(education).subscribe()
    );
  }
  cancelChanges() {
    this.editMode = false;
    this.getEducations();
  }
}
