import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  httpheaders = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic QUNmMjZkMjYwYjVhNmY3ODdhODZmNzg3NzZmZDYwYjdkYTpmMjdlYzMzMGQyZDQ0ZGZiMzQ4ZjhlYTMzMjk1ZTQ0Zg=='
    })
  }

  constructor(private http: HttpClient) { }

  userName: any;
  setUserName(userName){
    this.userName = userName;
  }

  getUserName(){
    return this.userName;
  }
  
  getChannelUniqueName(): Observable<any> {
    return this.http.get(
      'https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Channels',
      this.httpheaders)
      .pipe(map(data => data));
  }

  getSubscribedChannelUniqueName() :Observable<any>{
    return this.http.get(
      'https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Users/107180039227367403196/Channels',
      this.httpheaders)
      .pipe(map(data => data));
  }

  // createChannel(channelName: any): Observable<any> {
  //   return this.http.post<any>('https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Channels',
  //     '&UniqueName=' + channelName.value,
  //     this.httpheaders);
  // }

  userId: any;
  setUserID(userId){
    this.userId = userId;
  }

  joinChannel(CSID: any): Observable<any> {
    console.log(CSID);
    return this.http.post(
      'https://chat.twilio.com/v2/Services/ISadfef53b68914701bb2fc3da09ef6a78/Channels/'+ CSID +'/Members',
      'Identity=' + this.userId,
      this.httpheaders);
  }
}
