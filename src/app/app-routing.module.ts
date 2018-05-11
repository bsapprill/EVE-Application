import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserHasAuthenticatedComponent } from "./user-has-authenticated/user-has-authenticated.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { HashLocationStrategy } from "@angular/common";

const appRoutes: Routes = [
    { path: 'userHasAuthenticated/callback', component: UserHasAuthenticatedComponent},
    { path: 'userLogin', component: UserLoginComponent},
    { path: '', redirectTo: '/userLogin', pathMatch: 'full' }
];

@NgModule({
    imports: [        
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}