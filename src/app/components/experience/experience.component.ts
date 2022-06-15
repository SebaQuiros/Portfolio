import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/interfaces/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  selectedExperience?: Experience;

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
}
