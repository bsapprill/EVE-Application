import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserHasAuthenticatedComponent } from "../components/user-has-authenticated/user-has-authenticated.component";
import { UserLoginComponent } from "../components//user-login/user-login.component";
import { HashLocationStrategy } from "@angular/common";
import { AdminViewComponent } from "../components/admin-view/admin-view.component";
import { AuthSuccessComponent } from "../components/auth-success/auth-success.component";
import { ApplicantGroupComponent } from "../components/applicant-group/applicant-group.component";
import { MembersGroupComponent } from "../components/members-group/members-group.component";
import { RequisitionsGroupComponent } from "../components/requisitions-group/requisitions-group.component";
import { FleetGroupComponent } from "../components/fleet-group/fleet-group.component";
import { TradeGroupComponent } from "../components/trade-group/trade-group.component";

const appRoutes: Routes = [
    { path: 'auth',
      component: UserHasAuthenticatedComponent,
      children: [          
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'success',
            component: AuthSuccessComponent
        },
        {
            path: 'login',
            component: UserLoginComponent
        }
      ]
    },
    // { path: 'auth/success', component: AuthSuccessComponent },
    // { path: 'auth/login', component: UserLoginComponent},
    { path: 'admin',
      component: AdminViewComponent,
      children: [
            {
                path: '',
                redirectTo: 'members',
                pathMatch: 'full'
            },
            {
                path: 'members',
                component: MembersGroupComponent
            },
            {
                path: 'requisitions',
                component: RequisitionsGroupComponent
            },
            {
                path: 'fleet',
                component: FleetGroupComponent
            },
            {
                path: 'trade',
                component: TradeGroupComponent
            }
      ]
    },
    { path: 'dev',
      
    },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [        
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}