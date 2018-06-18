import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/internal/Observable";

import { AuthWithEveService } from "./auth-with-eve.service";

import { APIAccessParameters } from "../models/api-access-parameters";
import { CharacterData } from "../models/character-data";

const ESIRoot: string = 'https://esi.evetech.net/latest/';

@Injectable()
export class APIAccessService {

  AuthedCharacter: CharacterData;

  constructor(
      private http: HttpClient,
      private authService: AuthWithEveService
  ){}

  verifyCharacter() {
    console.log('verifying character');
    
    
  }

  userRequests(functionToApply: (data) => void, refName: string, characterID: number, refFocus: string) {
    let accessParameters: APIAccessParameters = {
      actionToApply: functionToApply,
      referenceName: refName,
      characterID: characterID,
      referenceFocus: refFocus
    }
  
    this.requestAPIUsingParameters(accessParameters);
  }

  setCharacterId(id: number) {
    this.AuthedCharacter.CharacterID = id;
  }

  requestAPIUsingParameters( params: APIAccessParameters ) {
    this.returnCharacterAPIRequest(params.referenceName, params.characterID, params.referenceFocus).subscribe(
      data => params.actionToApply(data)
    )
  }

  returnCharacterAPIRequest(referenceName: string, characterID: number, referenceFocus: string): Observable<any> {
    
    let referenceUrl: string
      = ESIRoot
      + referenceName +'/'
      + characterID.toString() + '/'
      + referenceFocus + '/';

    return this.httpGetAtUrl(referenceUrl);
  }

  returnMarketsGroupsAPIRequest(id: number) {

    let referenceUrl: string
      = ESIRoot
      + 'markets/groups/'+id.toString() +'/';

    return this.httpGetAtUrl(referenceUrl);
  }

  returnMarketsGroups() {
    let referenceUrl: string =
    ESIRoot
    + 'markets/groups/';

    return this.httpGetAtUrl(referenceUrl);
  }

  returnUniverseNameAPIRequest(ids: number[]): Observable<any> {
    
    let referenceUrl: string
      = ESIRoot
      + 'universe/names/';

    return this.http.post(
      referenceUrl, ids //, { headers: this.authService.activeAuthHeader }
    );
  }

  httpGetAtUrl(url: string) {

    return this.http.get(
      url, { headers: this.authService.activeAuthHeader }
    );
  }
}