import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login";

import { AppComponent } from './app.component';
import { GmailComponent } from './gmail/gmail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:GmailComponent},
  {path:'dashboard',
   component:DashboardComponent,
   canActivate:[AuthGuard]
  }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("447204927171-i45u6rd24i6lukvn3uentqjb0ov58bqs.apps.googleusercontent.com")
      }      
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    GmailComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
