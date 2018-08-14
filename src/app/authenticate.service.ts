import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  userId: any;

  setData(data : any){
    this.userId = data;
  }

  getData(){
    return this.userId;
  }

  constructor() { }
}
