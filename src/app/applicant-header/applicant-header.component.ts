import { Component, OnInit, Input } from '@angular/core';

import { APIAccessService } from '../services/api-access.service';
import { APIAccessParameters } from '../models/api-access-parameters';
import { CharacterData } from '../models/character-data';

@Component({
  selector: 'app-applicant-header',
  templateUrl: './applicant-header.component.html',
  styleUrls: ['./applicant-header.component.css']
})
export class ApplicantHeaderComponent implements OnInit {

  @Input() applicant: CharacterData;

  portraitURL: string;

  constructor(
    private api: APIAccessService
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

}

class ReturnedPortraitData {
  
  constructor(
    public px128x128: string,
    public px256x256: string,
    public px512x512: string,
    public px64x64: string
  ) {}
}
