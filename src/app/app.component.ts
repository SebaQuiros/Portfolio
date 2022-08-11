import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLoginForm: Boolean = false;

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
