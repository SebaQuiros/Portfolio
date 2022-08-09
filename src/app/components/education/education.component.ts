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
      this.selectedEducation = educations[educations.length - 1];
    });
  }
  onSelect(education: Education): void {
    this.selectedEducation = education;
  }

  // Funciones de la sección.
  addEducation() {
    let newEducation: Education = {
      button: 'Nueva educación',
      occupation: '',
      title: '',
      link: '',
      subtitle: '',
      duration: '',
    };
    this.educationService
      .addEducation(newEducation)
      .subscribe(() => this.getEducations());
    this.selectedEducation = this.educations[this.educations.length - 1];
  }
  deleteEducation(education: Education) {
    this.educationService.deleteEducation(education).subscribe(() => {
      this.educations = this.educations.filter((e) => e !== education);
    });
  }
  addParagraph(education: Education, paragraph: string) {
    if (paragraph) {
      if (!education.description) {
        education.description = [`${paragraph}`];
      } else {
        education.description!.push(paragraph);
      }
    }
  }
  deleteParagraph(education: Education, paragraph: string) {
    education.description = education.description?.filter(
      (t) => t !== paragraph
    );
  }
  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing education');
  }
  saveChanges(): void {
    this.editMode = false;
    this.educations.forEach((education) =>
      this.educationService.saveChanges(education).subscribe()
    );
    this.selectedEducation = this.educations[this.educations.length - 1];
  }
  cancelChanges() {
    this.editMode = false;
    this.getEducations();
  }
}
