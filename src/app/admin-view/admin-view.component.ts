import { Component, OnInit } from '@angular/core';
import { AuthWithEveService } from '../services/auth-with-eve.service';
import { APIAccessParameters } from '../models/api-access-parameters';
import { APIAccessService } from '../services/api-access.service';
import { Observable } from 'rxjs';
import { FirebaseDataService } from '../services/firebase-data.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  ngOnInit() {
    
  }
}
