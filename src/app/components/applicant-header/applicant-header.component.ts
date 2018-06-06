import { Component, OnInit, Input, HostListener } from '@angular/core';

import { APIAccessService } from '../../services/api-access.service';
import { APIAccessParameters } from '../../models/api-access-parameters';
import { CharacterData } from '../../models/character-data';
import { FirebaseDataService } from '../../services/firebase-data.service';

@Component({
  selector: 'app-applicant-header',
  templateUrl: './applicant-header.component.html',
  styleUrls: ['./applicant-header.component.css']
})
export class ApplicantHeaderComponent implements OnInit {

  @Input() applicant: CharacterData;

  portraitURL: string;

  // @HostListener('click') adminClearsNewApplicant() {
  //   this.firebase.newCharactersDoc.ref.get().then(
  //     doc => {
  //       let newCharacters: string[] = [];
        
  //       doc.data().characterNames.forEach(name => {
  //         if(this.applicant.CharacterName != name){
  //           newCharacters.push(name);
  //         }
  //       });
        
  //       this.firebase.newCharactersDoc.update({
  //         characterNames: newCharacters
  //       });
  //     }
  //   );
  // }

  constructor(
    private api: APIAccessService,
    private firebase: FirebaseDataService
  ) { }

  ngOnInit() {
    this.retrieveApplicantPortrait();
  }

  assignApplicantPortraitURL: Function = (data: ReturnedPortraitData) => {
    this.portraitURL = data.px64x64;
  }

  retrieveApplicantPortrait() {
  
    this.api.userRequests(this.assignApplicantPortraitURL.bind(this), 'characters', this.applicant.CharacterID, 'portrait');
  }

  retrieveApplicantSP() {
    
  }

}

class ReturnedPortraitData {
  
  constructor(
    public px128x128: string,
    public px256x256: string,
    public px512x512: string,
    public px64x64: string
  ) {}
}
