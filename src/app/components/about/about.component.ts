import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  editStart() {
    this.editMode = true;
    console.log('Editing about information');
  }
  editSave() {
    this.editMode = false;
  }
  editCancel() {
    this.editMode = false;
  }
}
