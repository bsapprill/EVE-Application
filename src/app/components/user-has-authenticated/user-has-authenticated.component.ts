import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { AuthWithEveService } from '../../services/auth-with-eve.service';
import { APIAccessService } from '../../services/api-access.service';

import { CharacterData } from '../../models/character-data';
import { APIAccessParameters } from '../../models/api-access-parameters';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseDataService } from '../../services/firebase-data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-has-authenticated',
  templateUrl: './user-has-authenticated.component.html',
  styleUrls: ['./user-has-authenticated.component.css']
})
export class UserHasAuthenticatedComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthWithEveService,
    private apiService: APIAccessService,
    private data: FirebaseDataService,
    private http: HttpClient,
    private userAuth: AuthService
  ) { }
  
  ngOnInit() {
    
    let access_token = this.route.snapshot.fragment.slice(13, 100);
   
    this.authService.initializeMemberValues(access_token);

    this.authService.verifyCharacter(access_token).subscribe(
      (obj: CharacterData) => {        
        
        this.data.charactersCollection.doc(obj.CharacterName).ref.get().then(
          doc => {
            
            this.data.activeCharacterDoc = this.data.charactersCollection.doc(obj.CharacterName);
            
            this.apiService.AuthedCharacter = obj;

            if(doc.exists){
            
              this.userAuth.InstanceUser = doc.data().CharacterName;
              this.userAuth.InstanceUserHasAuthed = true;

              if(doc.data().CharacterIsAdmin){
                this.userAuth.InstanceUserIsAdmin = true;
                this.router.navigate(['/admin']);
              } else {
                this.router.navigate(['/auth/success']);
              }
            } else {
              
              this.data.activeCharacterDoc.set({
                CharacterID: obj.CharacterID,
                CharacterName: obj.CharacterName          
              });
              
              this.apiService.userRequests(dataObj => {
                
                let skillIds: number[] = [];

                dataObj.skills.forEach(skill => {
                  skillIds.push(skill.skill_id);
                });

                this.data.activeCharacterDoc.set({
                  CharacterSP: dataObj.total_sp,
                  CharacterSkillIDs: skillIds
                }, {merge: true});

              }, 'characters', obj.CharacterID, 'skills')

              this.data.newCharactersDoc.ref.get().then(
                doc => {

                  let newApplicants = doc.data().characterNames;

                  newApplicants.push(obj.CharacterName);
                  
                  this.data.newCharactersDoc.update(
                    {
                      characterNames: newApplicants
                    }
                  );
                }
              )

              this.data.charactersCollection.doc('admins').ref.get().then(
                docRef => {
      
                  let adminNames = docRef.data().adminCharacters;
      
                  if(adminNames.includes(obj.CharacterName)){
                    
                    this.data.activeCharacterDoc.set({
                      CharacterIsAdmin: true
                    }, {merge: true});
      
                    this.router.navigate(['/admin']);
      
                  } else {
                    this.router.navigate(['/auth/success']);
                  }
                }
              );
            }
          }
        )

      }
    );
  }
}
