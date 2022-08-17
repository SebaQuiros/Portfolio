import { Component, OnInit } from '@angular/core';

import { About } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  login: boolean = false;
  editMode: boolean = false;

  about: About = {
    fullName: 'Sebastián Quirós',
    occupation: 'Diseño y programo',
    mail: '',
    img: '',
    imgAlt: '',
  };

  emailstring: string = `mailto:${this.about.mail}?Subject=Portfolio`;

  constructor(
    private aboutService: AboutService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getAbout();
    this.getLoginStatus();
  }

  getLoginStatus() {
    this.loginService
      .getLoginStatus()
      .subscribe((login) => (this.login = login));
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((about) => {
      this.about = about[0];
      this.emailstring = `mailto:${this.about.mail}?Subject=Portfolio`;
    });
  }

  // Menú de cambios.
  editStart() {
    this.editMode = true;
    console.log('Editing about information');
  }
  saveChanges(): void {
    this.editMode = false;
    this.aboutService.saveChanges(this.about).subscribe(() => this.getAbout());
  }
  cancelChanges() {
    this.editMode = false;
  }
}
