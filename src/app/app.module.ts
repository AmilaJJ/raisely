import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaiselySignupComponent } from './auth/raisely-signup/raisely-signup.component';
import { ReactiveFormsModule , FormsModule   } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { SignedupComponent } from './signedup/signedup.component';

@NgModule({
  declarations: [
    AppComponent,
    RaiselySignupComponent,
    SignedupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
