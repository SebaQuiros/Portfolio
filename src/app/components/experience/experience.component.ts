import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/interfaces/experience';
import { EXPERIENCES } from 'src/app/data/experience-data';
import { ExperienceService } from 'src/app/services/experience.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  login: boolean = false;
  editMode: boolean = false;

  experiences: Experience[] = EXPERIENCES;
  selectedExperience: Experience = this.experiences[0];
  newParagraph: string = '';

  constructor(
    private experienceService: ExperienceService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getExperiences();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.loginService.getLoginStatus();
    // .subscribe((login) => (this.login = login));
  }

  getExperiences() {
    this.experienceService.getExperiences().subscribe((experiences) => {
      this.experiences = experiences;
      this.selectedExperience = experiences[0];
    });
  }
  onSelect(experience: Experience): void {
    this.selectedExperience = experience;
  }

  // Funciones de la sección.
  addExperience() {
    let newExperience: Experience = {
      button: 'Nueva experiencia',
      occupation: '',
      title: '',
      link: '',
      subtitle: '',
      duration: '',
    };
    this.experienceService.addExperience(newExperience).subscribe(() => {
      this.getExperiences();
      console.log(this.experiences);
    });
    this.selectedExperience = this.experiences[0];
  }
  deleteExperience(experience: Experience) {
    this.experienceService.deleteExperience(experience).subscribe(() => {
      this.experiences = this.experiences.filter((e) => e !== experience);
    });
  }
  addParagraph(experience: Experience, paragraph: string) {
    if (paragraph) {
      if (!experience.description) {
        experience.description = [`${paragraph}`];
      } else {
        experience.description!.push(paragraph);
      }
      this.newParagraph = '';
    }
  }
  deleteParagraph(experience: Experience, paragraph: string) {
    experience.description = experience.description!.filter(
      (t) => t !== paragraph
    );
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing experience');
  }
  saveChanges(): void {
    this.editMode = false;
    this.experiences.forEach((experience) =>
      this.experienceService.saveChanges(experience).subscribe()
    );
    this.selectedExperience = this.experiences[0];
  }
  cancelChanges() {
    this.editMode = false;
    this.getExperiences();
  }
}
