import { Component, inject } from '@angular/core';
import { UserAccount } from '../user-account';
import { FormControl , FormGroup , ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-box',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl:'login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent {
  authService : AuthentificationService = inject(AuthentificationService);
  constructor() {
    
  }
  userLogin : UserAccount ={
    firstname : '',
    lastname : '',
    gender : false,
    date_of_birthe : '',
    email : '',
    password : '',
    phone:'',
  } ;
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });
   private merge( email : string , password : string) : UserAccount{
    return { firstname : '',
      lastname : '',
      gender : false,
      date_of_birthe : '',
      email : email,
      password : password,
      phone:'',}

  }
  
  onSubmit() : void {
    this.authService.authentificationAtempt(
      this.merge(this.loginForm.value.email ?? '' ,
        this.loginForm.value.password ?? '') );
   
  }

}
