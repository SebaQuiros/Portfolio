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
      this.selectedExperience = experiences[0];
    });
  }
  onSelect(experience: Experience): void {
    this.selectedExperience = experience;
  }

  // Funciones de la sección.
  addParagraph(experience: Experience, paragraph: string) {
    if (paragraph) {
      experience.description.push(paragraph);
    }
  }
  deleteParagraph(experience: Experience, paragraph: string) {
    experience.description = experience.description.filter(
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
    this.experienceService.saveChanges(this.experiences).subscribe();
  }
  cancelChanges() {
    this.editMode = false;
    this.getExperiences();
  }
}
