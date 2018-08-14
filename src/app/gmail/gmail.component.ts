import {Component} from '@angular/core';
import {
    AuthService,
    GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { MessageService } from '../message.service';
import { GeneralService } from '../general.service';
 
@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.css']
})
 
 
export class GmailComponent {
 
  constructor( 
    private socialAuthService: AuthService,
    private route: Router, 
    private authenticateService: AuthenticateService,
    private messageService: MessageService,
    private generalService: GeneralService
  ) {}
  
  public socialSignIn() {
    let socialPlatformProvider;
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(" sign in data : " , userData.name);
        this.generalService.setUserName(userData.name);
        this.messageService.setUserName(userData.name);
        this.messageService.setUserID(userData.id);
        this.generalService.setUserID(userData.id);
        this.authenticateService.setData(userData);
        this.route.navigate(['/dashboard']);
      }
    );
  }
  
}