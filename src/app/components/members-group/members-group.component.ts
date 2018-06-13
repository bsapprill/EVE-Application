import { Component, OnInit } from '@angular/core';
import { FirebaseDataService } from '../../services/firebase-data.service';

@Component({
  selector: 'app-members-group',
  templateUrl: './members-group.component.html',
  styleUrls: ['./members-group.component.css']
})
export class MembersGroupComponent implements OnInit {

  applicants: CharacterData[] = [];

  selectedMember: CharacterData;

  constructor(private data: FirebaseDataService) { }

  ngOnInit() {

    this.data.charactersCollection.ref.get().then(
      querySnapshot => {
        querySnapshot.docs.forEach(
          doc => {
            this.applicants.push(doc.data() as CharacterData)
          }
        )
      }
    )
  }

  selectMember(index: number) {
    this.selectedMember = this.applicants[index];
  }

}
