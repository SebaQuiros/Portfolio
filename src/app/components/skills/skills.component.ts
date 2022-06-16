import { Component, OnInit } from '@angular/core';

import { SkillSet } from 'src/app/interfaces/skill-set';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: SkillSet[] = [];
  login: boolean = true;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills() {
    this.skillsService
      .getSkills()
      .subscribe((skills) => (this.skills = skills));
  }
}
