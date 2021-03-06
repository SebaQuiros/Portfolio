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
  addTool(proyect: Proyect, tool: string) {
    if (tool) {
      proyect.tools.push(tool);
    }
  }
  deleteTool(proyect: Proyect, tool: string) {
    proyect.tools = proyect.tools.filter((t) => t !== tool);
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing skills');
  }
  saveChanges(): void {
    this.editMode = false;
    this.proyectService.saveChanges(this.proyects).subscribe();
  }
  cancelChanges() {
    this.editMode = false;
    this.getProyects();
  }
}
