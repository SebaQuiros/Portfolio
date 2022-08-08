import { Component, OnInit } from '@angular/core';

import { About } from 'src/app/interfaces/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  login: boolean = true;
  editMode: boolean = false;

  about: About = { img: '', imgAlt: '' };

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout() {
    this.aboutService.getAbout().subscribe((about) => {
      this.about = about;
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
