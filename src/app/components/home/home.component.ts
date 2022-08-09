import { Component, OnInit } from '@angular/core';

import { About } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  about: About = {
    fullName: 'Nombre Apellido',
    occupation: 'Ocupación',
    mail: '',
    img: '',
    imgAlt: '',
  };

  emailstring: string = `mailto:${this.about.mail}?Subject=Portfolio`;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.getAbout();
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
