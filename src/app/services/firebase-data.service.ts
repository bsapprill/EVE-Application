import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { CharacterData } from '../models/character-data';

@Injectable()
export class FirebaseDataService {

  charactersCollection: AngularFirestoreCollection;
  activeCharacterDoc: AngularFirestoreDocument;

  newCharactersDoc: AngularFirestoreDocument;

  constructor(
    private db: AngularFirestore
  ) {      
      this.charactersCollection = this.db.collection('characters');
      this.newCharactersDoc = this.charactersCollection.doc('newApplicantsCharacterList');
  }

}
