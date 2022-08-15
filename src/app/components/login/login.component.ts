import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    mailUser: '',
    passwordUser: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.user.mailUser.length || !this.user.passwordUser.length) {
      alert('Llenar los campos es obligatorio.');
      return;
    }
    this.loginService.login(this.user).subscribe();
  }
}
