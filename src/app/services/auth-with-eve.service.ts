import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

const authorize_url: string = 'https://login.eveonline.com/oauth/authorize/';
const response_type: string = '?response_type=token';
const redirect_uri: string = '&redirect_uri=http://localhost:4200/userHasAuthenticated/callback';

const client_id_val: string = '00b75454089e4a5dab870ce370e7a152';
const client_id: string = '&client_id='+client_id_val;

const client_secret: string = 'JfK(]xFjs2z63n<1$t4BCn/]CrFlmA';
const scope: string = '&scope=esi-skills.read_skills.v1 esi-wallet.read_character_wallet.v1';

const client_64: string = 'MDBiNzU0NTQwODllNGE1ZGFiODcwY2UzNzBlN2ExNTI6SmZLKF14RmpzMno2M248MSR0NEJDbi9dQ3JGbG1B';

const authHeader: string = 'Basic MDBiNzU0NTQwODllNGE1ZGFiODcwY2UzNzBlN2ExNTI6SmZLKF14RmpzMno2M248MSR0NEJDbi9dQ3JGbG1B';

const tokenPOSTUrl = 'https://login.eveonline.com/oauth/token';
const verifyGETUrl = 'https://esi.tech.ccp.is/verify/';

@Injectable()
export class AuthWithEveService {

  activeToken: string;

  activeAuthHeader: HttpHeaders;

  constructor(
    
    private http: HttpClient
  ) {}
  
  verifyCharacter(token: string): Observable<Object> {

    return this.http.get(verifyGETUrl, { headers: this.activeAuthHeader});
  }

  SSOUrl(): string {
    return authorize_url
          + response_type
          + redirect_uri
          + client_id
          + scope;
  }

  setAuthHeader() {

    this.activeAuthHeader = new HttpHeaders({
      'Authorization': 'Bearer '+this.activeToken
    });
  }

  initializeMemberValues(token: string) {
    this.activeToken = token;
    this.setAuthHeader();
  }
}
