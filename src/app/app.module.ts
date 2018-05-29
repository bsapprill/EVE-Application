import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { UserHasAuthenticatedComponent } from './user-has-authenticated/user-has-authenticated.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { AuthWithEveService } from './services/auth-with-eve.service';
import { APIAccessService } from './services/api-access.service';
import { FooterGroupComponent } from './footer-group/footer-group.component';
import { MaterialModule } from './material.module';
import { AdminViewComponent } from './admin-view/admin-view.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirebaseDataService } from './services/firebase-data.service';
import { AuthSuccessComponent } from './auth-success/auth-success.component';
import { ApplicantHeaderComponent } from './applicant-header/applicant-header.component';
import { RetrievePortraitService } from './services/retrieve-portrait.service';
import { ApplicantGroupComponent } from './applicant-group/applicant-group.component';

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
    ApplicantGroupComponent
  ],
  imports: [
    BrowserModule,
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
    RetrievePortraitService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
