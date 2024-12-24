import { Injectable } from '@angular/core';
import { UserAccount } from './user-account';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  protected User : UserAccount = {
    firstname : '',
    lastname : '',
    gender : false,
    date_of_birthe : '',
    email : '',
    password : '',
    phone:'',
  }
 

  constructor() { }
  authentificationAtempt(username : UserAccount) {
    console.log(username.email);

  }
  getAnswer() : boolean {

    return true; // here we recieve the answer from the backend if the account exists or not
  }
}
