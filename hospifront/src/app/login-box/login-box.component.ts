import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserAccount } from '../user-account';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { RouterModule } from '@angular/router';
import { Consultation } from '../consultation';
import { DPI } from '../dpi';

@Component({
  selector: 'app-login-box',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: 'login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent {
  @Output() loginSuccess = new EventEmitter<{ username : string , role : number , Data : DPI | DPI[] | Consultation[]}>();
  
  authService: AuthentificationService = inject(AuthentificationService);
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
dpis : DPI[] = [{patient:{
  nss: '4234234',
  name: 'hmida',
  email: 'rwrw@gmail.dz',
  phone: '05033212',
  creationDate: '09/2132',
  creationTime: '10:23',

},
  consultations:null
}]
  onSubmit(): void {
    this.authService.authentificationAtempt(
      this.merge(this.loginForm.value.email ?? '',
        this.loginForm.value.password ?? '')
    );
    
    // Simulate role-based authentication response
    // In a real app, this would come from your auth service
    
    this.loginSuccess.emit({username:'rookie',role:5,Data:this.dpis});
  }

  

  private merge(email: string, password: string): UserAccount {
    return {
      firstname: '',
      lastname: '',
      gender: false,
      date_of_birthe: '',
      email: email,
      password: password,
      phone: '',
    }
  }
}
