import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/interfaces/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  experiences: Experience[] = [];
  selectedExperience?: Experience;
  newParagraph: string = '';

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences() {
    this.experienceService.getExperiences().subscribe((experiences) => {
      this.experiences = experiences;
      this.selectedExperience = experiences[experiences.length - 1];
    });
  }
  onSelect(experience: Experience): void {
    this.selectedExperience = experience;
  }

  // Funciones de la sección.
  addExperience() {
    let newExperience: Experience = {
      id: this.experiences.length + 1,
      button: 'Nueva experiencia',
      occupation: '',
      title: '',
      link: '',
      subtitle: '',
      duration: '',
    };
    this.experiences.push(newExperience);
    this.selectedExperience = this.experiences[this.experiences.length - 1];
  }
  deleteExperience(experience: Experience) {
    this.experienceService.deleteExperience(experience).subscribe(() => {
      this.experiences = this.experiences.filter((e) => e !== experience);
    });
  }
  addParagraph(experience: Experience, paragraph: string) {
    if (paragraph) {
      experience.description!.push(paragraph);
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
    this.selectedExperience = this.experiences[this.experiences.length - 1];
  }
  cancelChanges() {
    this.editMode = false;
    this.getExperiences();
  }
}
