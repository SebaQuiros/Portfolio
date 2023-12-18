import { Component, OnInit } from '@angular/core';

import { Education } from 'src/app/interfaces/education';
import { EDUCATIONS } from 'src/app/data/education-data';
import { EducationService } from 'src/app/services/education.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  login: boolean = false;
  editMode: boolean = false;

  educations: Education[] = EDUCATIONS;
  selectedEducation: Education = this.educations[0];
  newParagraph: string = '';

  constructor(
    private educationService: EducationService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getEducations();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.loginService.getLoginStatus();
    // .subscribe((login) => (this.login = login));
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
    this.selectedEducation = this.educations[0];
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
      this.newParagraph = '';
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
    this.selectedEducation = this.educations[0];
  }
  cancelChanges() {
    this.editMode = false;
    this.getEducations();
  }
}
