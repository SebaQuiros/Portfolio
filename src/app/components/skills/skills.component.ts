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

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .subscribe((skills) => (this.skills = skills));
  }
  editStart() {
    this.editMode = true;
    console.log('Editing skills');
  }
  editSave() {
    this.editMode = false;
  }
  editCancel() {
    this.editMode = false;
  }
}
