import { Component, OnInit } from '@angular/core';
import { APIAccessService } from '../../../services/api-access.service';
import { FirebaseDataService } from '../../../services/firebase-data.service';
import { CharacterData } from '../../../models/character-data';
import { AngularFirestoreDocument, DocumentSnapshot, QuerySnapshot, QueryDocumentSnapshot, CollectionReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-esiaccess-component',
  templateUrl: './esiaccess-component.component.html',
  styleUrls: ['./esiaccess-component.component.css']
})
export class ESIAccessComponentComponent implements OnInit {

  CategoryDocumentId: string;

  CategoryDocumentSnapshot: DocumentSnapshot<any>;

  CategoryGroup_CollectionReference: CollectionReference;

  constructor(
    private api: APIAccessService,
    private data: FirebaseDataService    
  ) { }

  ngOnInit() {
    // this.data.charactersCollection.doc('Corderaux').ref.get().then(
    //   doc => { this.api.AuthedCharacter = doc.data() as CharacterData }
    // )

    // this.data.QueryForCategory_ByName('Infrastructure Upgrades').then(this.InitializeRelevantDocumentIdentifiers);

  }
  
  testCall() {

    this.CategoryDocumentSnapshot.data().groupIds.forEach(this.CallAPI_UsingGroupId_ForWritingGroupData);

    // Add group data to selected category group collection

      // Access category through query
        // Save category document to variable for global access
      // Access category group collection
        // Save group collection reference for global access
      // Access category document
        // For each id in the category group ids
          // Call for group data, from API, using group id
          // Write group data to group collection
  }

  CallAPI_UsingGroupId_ForWritingGroupData = (groupId: number) => {
    this.api.buildAPIRequest('universe/', 'groups/', groupId.toString() + '/').subscribe(this.WriteGroupData_ToGroupDocument);
  }

    WriteGroupData_ToGroupDocument = (groupData_FromAPI) => {
      
      let group_ToWrite = {
        id: groupData_FromAPI.group_id,
        name: groupData_FromAPI.name,
        type_ids: groupData_FromAPI.types
      }

      this.data.AddGroup_ToCategory_WithCategoryDocumentId(group_ToWrite, this.CategoryDocumentId);
    }


  InitializeRelevantDocumentIdentifiers = (querySnapshot: QuerySnapshot<any>) => {

    this.AssignQueryResultId_ToCategoryDocumentId(querySnapshot);

    this.data.GetCategoryDocument_ById(this.CategoryDocumentId).then(this.AssignCategoryDocumentSnapshot);
  }

    AssignQueryResultId_ToCategoryDocumentId = (querySnapshot: QuerySnapshot<any>) => {
      this.CategoryDocumentId = querySnapshot.docs[0].ref.id;
    }

    AssignCategoryDocumentSnapshot = (documentSnapshot: DocumentSnapshot<any>) => {
      this.CategoryDocumentSnapshot = documentSnapshot;
      this.CategoryGroup_CollectionReference = documentSnapshot.ref.collection('Groups');
    }

  
  ReadDocumentSnapshot = (documentSnapshot: DocumentSnapshot<any>) => {
    this.logData(documentSnapshot.data().groupIds[0]);
  }

  ReadQuerySnapshot = (querySnapshot: QuerySnapshot<any>) => {
    this.logData(querySnapshot);
  }

  logData(data) {
    console.log(data)
  }

}

class GroupData {
  
  constructor(    
    public id: number,
    public name: string,
    public type_ids: number[]
  ) {}
}