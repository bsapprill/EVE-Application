import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, QuerySnapshot } from 'angularfire2/firestore';
import { CharacterData } from '../models/character-data';
import { APIAccessService } from './api-access.service';
import { SkillGroupData } from '../models/skill-group-data';
import { Skill } from '../models/skill';
import { SkillGroup } from '../models/skill-group';
import { SkillRoute } from '../models/skill-route';

@Injectable()
export class FirebaseDataService {

  charactersCollection: AngularFirestoreCollection;
  activeCharacterDoc: AngularFirestoreDocument;

  newCharactersDoc: AngularFirestoreDocument;

  DataCollection: AngularFirestoreCollection;
  SkillsDocument: AngularFirestoreDocument;

  constructor(
    private db: AngularFirestore,
    private apiService: APIAccessService
  ) {      
      this.charactersCollection = this.db.collection('characters');
      this.newCharactersDoc = this.charactersCollection.doc('newApplicantsCharacterList');

      this.DataCollection = this.db.collection('Data');
      this.SkillsDocument = this.DataCollection.doc('Skills');
  }

  AddCategory(categoryData) {
    this.db.collection('Categories').add( categoryData );
  }

  AddGroup_ToCategory_WithCategoryDocumentId(groupData, categoryDocumentId: string) {
    this.db.collection('Categories').doc(categoryDocumentId).collection('Groups').add(groupData);
  }

  QueryForCategory_ByName(categoryName: string): Promise<any> {
    return this.db.collection('Categories').ref.where('name', '==', categoryName).get();
  }

  GetCategory_ById(categoryId: number) {
    return this.db.collection('Categories').ref.where('id', '==', categoryId).get();
  }

  GetCategoryDocument_ById(docId: string) {
    return this.db.collection('Categories').doc(docId).ref.get();
  }

  testCall() {

  }

  transposeSkillTemplatesFromCCPDATA() {

    let skillGroupIds: number[] = [
      377,
      374,
      368,
      1824,
      1745,
      1747,
      1748,
      364,
      373,
      366,
      367,
      1110,
      372,
      376,
      370,
      365,
      378,
      1746,
      369,
      375,
      1323,
      1823,
      2152
    ];

    let skillGroupDatas: SkillGroupData[] = [];
    let skillGroups: SkillGroup[] = [];

    skillGroupIds.forEach(id => {
      this.apiService.returnMarketsGroupsAPIRequest(id).subscribe(
        (skillGroupData: SkillGroupData) => {
          
          skillGroupDatas.push(skillGroupData);
          let skillGroupSkills: Skill[] = [];
          
          this.apiService.returnUniverseNameAPIRequest(skillGroupData.types).subscribe(
            skillData => {
              for (let i = 0; i < skillData.length; i++) {
                
                let newSkill = new Skill(skillGroupData.types[i], skillData[i].name);
                
                skillGroupSkills.push(newSkill);

                console.log(newSkill);

                this.db
                  .collection('Data')
                  .doc('Skills')
                  .collection(skillGroupData.name)
                  .doc(newSkill.name)
                  .set({id: newSkill.id});
                
              }
            }
          );
          
          let newSkillGroup = new SkillGroup(skillGroupData.name, skillGroupSkills);
          
          skillGroups.push(newSkillGroup);        
            
        }
      );
    });
    
  }
}
