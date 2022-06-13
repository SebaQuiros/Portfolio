import { Component, OnInit } from '@angular/core';

import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience: Experience = {
    id: 1,
    button: 'Fundación IDA',
    role: 'Voluntario en',
    title: 'Fundación IDA',
    subtitle: 'Investigación en Diseño Argentino',
    time: 'Enero 2021 - Marzo 2022',
    description: [
      'Encargado del área de arquitectura para la obtención, recepción y catalogación de material nuevo.',
      'Investigador para el proyecto "Épica. Hazañas del diseño argentino."',
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
