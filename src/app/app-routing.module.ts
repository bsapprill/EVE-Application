import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserHasAuthenticatedComponent } from "./user-has-authenticated/user-has-authenticated.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { HashLocationStrategy } from "@angular/common";
import { AdminViewComponent } from "./admin-view/admin-view.component";
import { AuthSuccessComponent } from "./auth-success/auth-success.component";

const appRoutes: Routes = [
    { path: 'auth', component: UserHasAuthenticatedComponent},
    { path: 'auth/success', component: AuthSuccessComponent },
    { path: 'auth/login', component: UserLoginComponent},
    { path: 'admin', component: AdminViewComponent},
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [        
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}