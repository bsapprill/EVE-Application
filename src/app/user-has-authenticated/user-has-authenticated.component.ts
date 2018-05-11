import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { AuthWithEveService } from '../services/auth-with-eve.service';
import { APIAccessService } from '../services/api-access.service';

import { CharacterData } from '../models/character-data';
import { APIAccessParameters } from '../models/api-access-parameters';

@Component({
  selector: 'app-user-has-authenticated',
  templateUrl: './user-has-authenticated.component.html',
  styleUrls: ['./user-has-authenticated.component.css']
})
export class UserHasAuthenticatedComponent implements OnInit {

  walletISKValue: string;
  
  constructor(
    private route: ActivatedRoute,
    private authService: AuthWithEveService,
    private apiService: APIAccessService,
    private http: HttpClient
  ) { }
  
  ngOnInit() {
    
    let access_token = this.route.snapshot.fragment.slice(13, 100);
    
    this.authService.initializeMemberValues(access_token);
    
    this.authService.verifyCharacter(access_token).subscribe(
      (obj: CharacterData) => {
        
        this.apiService.CharacterID = obj.CharacterID;
      }
    );
  }
  
  assignWalletISK = (ISK: string) => {
    this.walletISKValue = ISK;
  }

  userRequestsWalletISK() {
    
    let walletAccessParameters: APIAccessParameters = {
      actionToApply: this.assignWalletISK,
      referenceName: 'characters/',
      referenceFocus: '/wallet/'
    }

    this.apiService.requestAPIUsingParameters(walletAccessParameters);
  }

}
