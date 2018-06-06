import { Component, OnInit } from '@angular/core';
import { AuthWithEveService } from '../../services/auth-with-eve.service';
import { APIAccessService } from '../../services/api-access.service';
import { FirebaseDataService } from '../../services/firebase-data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(
    private authService: AuthWithEveService,
    private apiService: APIAccessService,
    private firebaseData: FirebaseDataService
  ) {}

  ngOnInit() {}

  onClick(){
    
    window.location.href = this.authService.SSOUrl();
  }

  testAPI() {
    //console.log('test');
    this.apiService.returnMarketsGroupsAPIRequest(377).subscribe(
      data => console.log(data)
    );
  }

  firebaseAction() {
    this.firebaseData.testCall();
  }
}
