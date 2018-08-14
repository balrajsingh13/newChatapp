import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  httpheaders = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic QUNmMjZkMjYwYjVhNmY3ODdhODZmNzg3NzZmZDYwYjdkYTpmMjdlYzMzMGQyZDQ0ZGZiMzQ4ZjhlYTMzMjk1ZTQ0Zg=='
    })
  }

  constructor(private http: HttpClient) {
   
   }

   callAPIFlag = null;

  //GET /Services/{Instance SID}/Channels/{Channel SID}/Messages
  
  showMessages(channelSId: any): Observable<any>{
    return this.http.get(
      'https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Channels/' + channelSId + '/Messages',
      this.httpheaders)
      .pipe(map(data => data));
  }
//POST /Services/{Instance SID}/Channels/{Channel SID}/Messages

  userId: any;
  setUserID(userId){
    this.userId = userId;
  }

  userName: any;
  setUserName(userName){
    this.userName = userName;
    console.log(this.userName);
  }
  

  sendMessage( str, CSID): Observable<any> {
    return this.http.post<any>(
      'https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Channels/'+ CSID +'/Messages',
      '&Body=' + str.value + '&From=' + this.userName,
       this.httpheaders);
  }

}
