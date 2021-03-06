import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './modules/app-routing.module';

import { UserHasAuthenticatedComponent } from './components/user-has-authenticated/user-has-authenticated.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

import { AuthWithEveService } from './services/auth-with-eve.service';
import { APIAccessService } from './services/api-access.service';
import { FooterGroupComponent } from './components/footer-group/footer-group.component';
import { MaterialModule } from './modules/material.module';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirebaseDataService } from './services/firebase-data.service';
import { AuthSuccessComponent } from './components/auth-success/auth-success.component';
import { ApplicantHeaderComponent } from './components/applicant-header/applicant-header.component';
import { RetrievePortraitService } from './services/retrieve-portrait.service';
import { ApplicantGroupComponent } from './components/applicant-group/applicant-group.component';
import { AuthService } from './services/auth.service';
import { MembersGroupComponent } from './components/members-group/members-group.component';
import { RequisitionsGroupComponent } from './components/requisitions-group/requisitions-group.component';
import { FleetGroupComponent } from './components/fleet-group/fleet-group.component';
import { TradeGroupComponent } from './components/trade-group/trade-group.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevViewComponent } from './components/dev-view/dev-view.component';
import { FirebaseManagementComponent } from './components/dev-view/firebase-management/firebase-management.component';
import { ESIAccessComponentComponent } from './components/dev-view/esiaccess-component/esiaccess-component.component';

//import { HttpRequestInteceptor, InterceptorModule } from './intercept.module';

@NgModule({
  declarations: [
    AppComponent,
    UserHasAuthenticatedComponent,
    UserLoginComponent,
    FooterGroupComponent,
    AdminViewComponent,
    AuthSuccessComponent,
    ApplicantHeaderComponent,
    ApplicantGroupComponent,
    MembersGroupComponent,
    RequisitionsGroupComponent,
    FleetGroupComponent,
    TradeGroupComponent,
    DevViewComponent,
    FirebaseManagementComponent,
    ESIAccessComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FlexLayoutModule,
    MaterialModule,
    //InterceptorModule,
    HttpClientModule,
    AppRoutingModule,  
  ],
  providers: [    
    AuthWithEveService,
    APIAccessService,
    FirebaseDataService,
    RetrievePortraitService,
    AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
