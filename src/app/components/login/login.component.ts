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
    let newUser = this.user;
    this.loginService.login(newUser).subscribe();
  }
}
