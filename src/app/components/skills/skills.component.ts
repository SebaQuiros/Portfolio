import { Component, OnInit } from '@angular/core';

import { SkillSet } from 'src/app/interfaces/skill-set';
import { SKILLS } from 'src/app/data/skill-data';
import { SkillsService } from 'src/app/services/skills.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  login: boolean = false;
  editMode: boolean = false;

  skills: SkillSet[] = SKILLS;
  newTool: string = '';

  constructor(
    private skillsService: SkillsService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.loginService.getLoginStatus();
    // .subscribe((login) => (this.login = login));
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .subscribe((skills) => (this.skills = skills));
  }

  // Funciones de la sección.
  addSkillset() {
    let newSkillset: SkillSet = {
      type: '',
      title: 'Nuevo Skillset',
      description: 'Lorem ipsum',
    };
    this.skillsService
      .addSkillSet(newSkillset)
      .subscribe(() => this.getSkills());
  }
  deleteSkillSet(skillSet: SkillSet) {
    this.skillsService.deleteSkillSet(skillSet).subscribe(() => {
      this.skills = this.skills.filter((e) => e !== skillSet);
    });
  }
  addTool(skillSet: SkillSet, tool: string) {
    if (tool) {
      if (!skillSet.tools) {
        skillSet.tools = [`${tool}`];
      } else {
        skillSet.tools!.push(tool);
      }
      this.newTool = '';
    }
  }
  deleteTool(skillSet: SkillSet, tool: string) {
    skillSet.tools = skillSet.tools!.filter((t) => t !== tool);
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing skills');
  }
  saveChanges(): void {
    this.editMode = false;
    this.skills.forEach((skillset) =>
      this.skillsService.saveChanges(skillset).subscribe()
    );
  }
  cancelChanges() {
    this.editMode = false;
    this.getSkills();
  }
}
