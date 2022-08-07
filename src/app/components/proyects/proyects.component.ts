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

  // Funciones de la sección.
  addProyect() {
    let newProyect: Proyect = {
      id: this.proyects.length,
      type: '',
      link: '',
      title: '',
      description: '',
      img: '',
      imgAlt: '',
    };
    this.proyects.push(newProyect);
  }
  addTool(proyect: Proyect, tool: string) {
    if (tool) {
      proyect.tools!.push(tool);
    }
  }
  deleteTool(proyect: Proyect, tool: string) {
    proyect.tools = proyect.tools!.filter((t) => t !== tool);
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing proyects');
  }
  saveChanges(): void {
    this.editMode = false;
    this.proyects.forEach((proyect) =>
      this.proyectService.saveChanges(proyect).subscribe()
    );
  }
  cancelChanges() {
    this.editMode = false;
    this.getProyects();
  }
}
