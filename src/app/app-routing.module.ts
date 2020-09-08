import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaiselySignupComponent } from '../app/auth/raisely-signup/raisely-signup.component';
import { SignedupComponent } from '../app/signedup/signedup.component';
import { AuthGuard } from '../app/auth/auth.guard';


const routes: Routes = [{path: '', redirectTo: 'signUp', pathMatch: 'full'},
{path: 'signUp', component: RaiselySignupComponent},
{path: 'signedUp', component: SignedupComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
