import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { UserHasAuthenticatedComponent } from './user-has-authenticated/user-has-authenticated.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { AuthWithEveService } from './services/auth-with-eve.service';
import { APIAccessService } from './services/api-access.service';

//import { HttpRequestInteceptor, InterceptorModule } from './intercept.module';

@NgModule({
  declarations: [
    AppComponent,
    UserHasAuthenticatedComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    //InterceptorModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [    
    AuthWithEveService,
    APIAccessService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
