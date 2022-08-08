import { Component, OnInit } from '@angular/core';

import { project } from 'src/app/interfaces/project';
import { projectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class projectsComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  projects: project[] = [];
  newTool: string = '';

  constructor(private projectService: projectsService) {}

  ngOnInit(): void {
    this.getprojects();
  }

  getprojects() {
    this.projectService
      .getprojects()
      .subscribe((projects) => (this.projects = projects));
  }

  // Funciones de la sección.
  addproject() {
    let newproject: project = {
      id: this.projects.length + 1,
      type: 'Ejemplo',
      link: '',
      title: 'Nuevo projecto',
      description: '',
      img: '',
      imgAlt: '',
    };
    this.projects.push(newproject);
  }
  deleteproject(project: project) {
    this.projectService.deleteproject(project).subscribe(() => {
      this.projects = this.projects.filter((e) => e !== project);
    });
  }
  addTool(project: project, tool: string) {
    if (tool) {
      if (!project.tools) {
        project.tools = [`${tool}`];
      } else {
        project.tools!.push(tool);
      }
    }
  }
  deleteTool(project: project, tool: string) {
    project.tools = project.tools!.filter((t) => t !== tool);
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing projects');
  }
  saveChanges(): void {
    this.editMode = false;
    this.projects.forEach((project) =>
      this.projectService.saveChanges(project).subscribe()
    );
  }
  cancelChanges() {
    this.editMode = false;
    this.getprojects();
  }
}
