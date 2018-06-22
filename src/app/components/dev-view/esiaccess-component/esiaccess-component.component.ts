import { Component, OnInit } from '@angular/core';
import { APIAccessService } from '../../../services/api-access.service';
import { FirebaseDataService } from '../../../services/firebase-data.service';
import { CharacterData } from '../../../models/character-data';
import { access } from 'fs';

@Component({
  selector: 'app-esiaccess-component',
  templateUrl: './esiaccess-component.component.html',
  styleUrls: ['./esiaccess-component.component.css']
})
export class ESIAccessComponentComponent implements OnInit {

  constructor(
    private api: APIAccessService,
    private data: FirebaseDataService    
  ) { }

  ngOnInit() {
    this.data.charactersCollection.doc('Corderaux').ref.get().then(
      doc => { this.api.AuthedCharacter = doc.data() as CharacterData }
    )
  }

  testCall() {
    
    this.data.accessCategory('Ship', ;

  }
  
  accessCategoryAPI(CategoryId: number) {

    this.api.buildAPIRequest('universe/', 'categories/', CategoryId.toString() + '/')
  }

  readData(rangeStart: number, range: number) {
    
    for(var i = rangeStart; i < +rangeStart + +range; i++){
      this.api.returnMarketsGroupsAPIRequest(i).subscribe(
        data => console.log(data)
      );
    }
  }

  returnSingleData(id: number): any {
    this.api.returnMarketsGroupsAPIRequest(id).subscribe(
      data => {        
        return data;
      }
    );
  }

  writeToFirebase() {
    
    
    
  }

}

