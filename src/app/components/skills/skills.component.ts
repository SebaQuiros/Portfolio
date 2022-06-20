import { Component, OnInit } from '@angular/core';

import { SkillSet } from 'src/app/interfaces/skill-set';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  skills: SkillSet[] = [];
  newTool: string = '';

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .subscribe((skills) => (this.skills = skills));
  }

  // Edition functions of this section
  addTool(skillSet: SkillSet, tool: string) {
    if (tool) {
      skillSet.tools.push(tool);
    }
  }
  deleteTool(skillSet: SkillSet, tool: string) {
    skillSet.tools = skillSet.tools.filter((t) => t !== tool);
  }

  // Changes menu
  editStart() {
    this.editMode = true;
    console.log('Editing skills');
  }
  saveChanges(): void {
    this.editMode = false;
    this.skillsService.saveChanges(this.skills).subscribe();
  }
  cancelChanges() {
    this.editMode = false;
    this.getSkills();
  }
}
