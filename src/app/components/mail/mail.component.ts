import { Component, OnInit } from '@angular/core';

import { About } from 'src/app/interfaces/about';
import { ABOUT } from 'src/app/data/about-data';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  about: About = ABOUT;

  emailstring: string = `mailto:${this.about.mail}?Subject=Hola,%20vi%20tu%20portfolio%20online`;

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
}
