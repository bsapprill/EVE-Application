import { Component, OnInit } from '@angular/core';
import { AuthWithEveService } from '../services/auth-with-eve.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService: AuthWithEveService
  ) {}

  ngOnInit() {}

  onClick(){
    console.log('clicked login');
    window.location.href = this.authService.SSOUrl();

  }

}
