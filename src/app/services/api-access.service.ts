import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/internal/Observable";

import { AuthWithEveService } from "./auth-with-eve.service";

import { APIAccessParameters } from "../models/api-access-parameters";

const ESIRoot: string = 'https://esi.evetech.net/latest/';

@Injectable()
export class APIAccessService {

  CharacterID: number;

  constructor(
      private http: HttpClient,
      private authService: AuthWithEveService
  ){}

  requestAPIUsingParameters( params: APIAccessParameters) {
    this.returnCharacterAPIRequest(params.referenceName, params.referenceFocus).subscribe(
      data => params.actionToApply(data)
    )
  }

  returnCharacterAPIRequest(referenceName: string, referenceFocus: string): Observable<any> {
    
    let referenceUrl: string
      = ESIRoot
      + referenceName
      + this.CharacterID.toString()
      + referenceFocus;

    return this.httpGetAtUrl(referenceUrl);
  }

  httpGetAtUrl(url: string) {

    return this.http.get(
      url, { headers: this.authService.activeAuthHeader }
    );
  }
}