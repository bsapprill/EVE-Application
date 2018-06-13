import { Component, OnInit } from '@angular/core';
import { AuthWithEveService } from '../../services/auth-with-eve.service';
import { APIAccessParameters } from '../../models/api-access-parameters';
import { APIAccessService } from '../../services/api-access.service';
import { Observable } from 'rxjs';
import { FirebaseDataService } from '../../services/firebase-data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  routeList: string[] = [
    'members',
    'requisitions',
    'fleet',
    'trade'
  ]

  constructor(private auth: AuthService,
    private router: Router) {}

  ngOnInit() {
    // if(!this.auth.InstanceUserIsAdmin || !this.auth.InstanceUserHasAuthed){
    //   this.router.navigate(['/auth/login']);
    // }
  }
}
