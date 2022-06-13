import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/interfaces/experience';
import { EXPERIENCES } from 'src/app/mock-experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experiences = EXPERIENCES;
  constructor() {}

  ngOnInit(): void {}
}
