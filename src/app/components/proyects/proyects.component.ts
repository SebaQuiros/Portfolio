import { Component, OnInit } from '@angular/core';

import { Proyect } from 'src/app/interfaces/proyect';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  proyects: Proyect[] = [];

  constructor(private proyectService: ProyectsService) {}

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects() {
    this.proyectService
      .getProyects()
      .subscribe((proyects) => (this.proyects = proyects));
  }
  editStart() {
    this.editMode = true;
    console.log('Editing proyects');
  }
  editSave() {
    this.editMode = false;
  }
  editCancel() {
    this.editMode = false;
  }
}
