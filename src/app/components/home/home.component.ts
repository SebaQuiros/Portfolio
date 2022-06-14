import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fullName = 'Sebastián Quirós.';
  occupation = 'Diseño y programo.';

  constructor() {}

  ngOnInit(): void {}
}
