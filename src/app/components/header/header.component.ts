import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() loginForm = new EventEmitter();

  showLoginForm: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    this.loginForm.emit();
  }
}
