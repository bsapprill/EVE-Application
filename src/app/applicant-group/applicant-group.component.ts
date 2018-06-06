import { Component, OnInit } from '@angular/core';
import { APIAccessService } from '../services/api-access.service';
import { FirebaseDataService } from '../services/firebase-data.service';
import { CharacterData } from '../models/character-data';

@Component({
  selector: 'app-applicant-group',
  templateUrl: './applicant-group.component.html',
  styleUrls: ['./applicant-group.component.css']
})
export class ApplicantGroupComponent implements OnInit {

  newApplicants: CharacterData[] = [];

  haveNewApplicants: boolean;

  constructor(
    private apiService: APIAccessService,
    private data: FirebaseDataService
  ) { }

  ngOnInit() {
    this.data.newCharactersDoc.valueChanges().subscribe(
      docUpdate => {
        

          this.assignNewApplicants(docUpdate.characterNames);
        
      }
    );
  }

  // returnApplicantIDs: Function 
  //   = (applicants: CharacterData[]): number[] => {
  //     let ids: number[] = [];

  //     applicants.forEach(
  //       (applicant: CharacterData) => ids.push(applicant.CharacterID)
  //     )

  //     return ids;
  //   }

  returnCharacterIDs(characters: CharacterData[]): number[] {
    let ids: number[] = [];

    characters.forEach(
      (applicant: CharacterData) => ids.push(applicant.CharacterID)
    );

    return ids;
  }

  assignNewApplicants(characterNames: string[]) {
    
    let newApplicantList: CharacterData[] = [];

    characterNames.forEach(
      name => this.data.charactersCollection.doc(name).ref.get().then(
        doc => {
    
          newApplicantList.push(doc.data() as CharacterData);
          
        }
      )
    )

    this.newApplicants = newApplicantList;
  }

  adminClearsList() {    
    this.newApplicants = [];
    this.data.newCharactersDoc.update({
      characterNames: this.newApplicants
    })
  }
}
