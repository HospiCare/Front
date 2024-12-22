import { Component } from '@angular/core';

@Component({
  selector: 'app-login-box',
  imports: [],
  templateUrl:'login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent {
  private login(){

  }
 
  onSubmit() : void {
    this.login();
   
  }

}
