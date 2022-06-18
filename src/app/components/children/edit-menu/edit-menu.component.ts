import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  @Input() edit?: boolean;

  constructor() {}

  ngOnInit(): void {}
}
