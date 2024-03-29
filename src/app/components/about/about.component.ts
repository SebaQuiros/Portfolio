import { Component, OnInit } from '@angular/core';

import { About } from 'src/app/interfaces/about';
import { ABOUT } from 'src/app/data/about-data';
import { AboutService } from 'src/app/services/about.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  login: boolean = false;
  editMode: boolean = false;

  about: About = ABOUT;

  constructor(
    private aboutService: AboutService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getAbout();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.loginService.getLoginStatus();
    // .subscribe((login) => (this.login = login));
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((about) => {
      this.about = about[0];
    });
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing about information');
  }
  saveChanges(): void {
    this.editMode = false;
    this.aboutService.saveChanges(this.about).subscribe();
  }
  cancelChanges() {
    this.editMode = false;
  }
}
