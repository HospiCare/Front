import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserAccount } from '../user-account';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Consultation } from '../consultation';
import { DPI } from '../dpi';
import { apiClient } from '../apiService/Client'

@Component({
  selector: 'app-login-box',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: 'login-box.component.html',
  styleUrl: './login-box.component.css'
})
export class LoginBoxComponent {
  @Output() loginSuccess = new EventEmitter<{ username : string , role : string , Data : DPI | DPI[] | Consultation[]}>();

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
dpis : DPI[] = [{patient:{
  id:1,
  nss: '4234234',
  name: 'hmida',
  email: 'rwrw@gmail.dz',
  phone: '05033212',
  creationDate: '09/2132',
  creationTime: '10:23',
  adresse: 'uhzfehou',
  date_naissance: '11/11/1990'


},
  consultations:null
}]
  async onSubmit(): Promise<void> {
    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    const user: UserAccount = await apiClient.login(email, password);

    // TODO: fix Data
    this.loginSuccess.emit({username: `${user.first_name} ${user.last_name}`, role: user.user_type, Data:this.dpis});
  }
}
