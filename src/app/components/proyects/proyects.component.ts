import { Component, OnInit } from '@angular/core';

import { Proyect } from 'src/app/interfaces/proyect';
import { PROYECTS } from 'src/app/mock-proyects';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  proyects = PROYECTS;
  constructor() {}

  ngOnInit(): void {}
}
