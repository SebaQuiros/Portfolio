import { Component, OnInit } from '@angular/core';

import { Proyect } from 'src/app/interfaces/proyect';
import { ProyectsService } from 'src/app/services/proyects.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
})
export class ProyectsComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  proyects: Proyect[] = [];
  newTool: string = '';

  constructor(
    private proyectService: ProyectsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getProyects();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.login = this.loginService.getLoginStatus();
  }

  getProyects() {
    this.proyectService
      .getProyects()
      .subscribe((proyects) => (this.proyects = proyects));
  }

  // Funciones de la sección.
  addProyect() {
    let newProyect: Proyect = {
      type: 'Ejemplo',
      link: '',
      title: 'Nuevo proyecto',
      description: 'Lorem ipsum',
      img: '',
      imgAlt: '',
    };
    this.proyectService
      .addProyect(newProyect)
      .subscribe(() => this.getProyects());
  }
  deleteProyect(proyect: Proyect) {
    this.proyectService.deleteProyect(proyect).subscribe(() => {
      this.proyects = this.proyects.filter((e) => e !== proyect);
    });
  }
  addTool(proyect: Proyect, tool: string) {
    if (tool) {
      if (!proyect.tools) {
        proyect.tools = [`${tool}`];
      } else {
        proyect.tools!.push(tool);
      }
      this.newTool = '';
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
