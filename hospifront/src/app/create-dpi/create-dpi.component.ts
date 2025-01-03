import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { apiClient } from '../apiService/Client'

@Component({
  selector: 'app-create-dpi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-dpi.component.html',
  styleUrls: ['./create-dpi.component.scss']
})
export class CreateDpiComponent implements OnInit {
  
  baseUrl = 'http://localhost:8000';
  ngOnInit(): void {
    console.log('CreateDpiComponent initialized');
  }
  
  DpiCreateForm = new FormGroup({
    Nom: new FormControl(''),
    Prenom: new FormControl(''),
    NSS: new FormControl(''),
    DateNaissance: new FormControl(''),
    Adresse: new FormControl(''),
    Telephone: new FormControl(''),
    Mutuelle: new FormControl(''),
    MedcinTraitant: new FormControl(''),
    PersonneAContacter: new FormControl(''),
  });
 
  async onSubmit(): Promise<void> {
    const endpoint = 'dpis';
    const Nom = this.DpiCreateForm.value.Nom ?? '';
    const Prenom = this.DpiCreateForm.value.Prenom ?? '';
    const NSS = this.DpiCreateForm.value.NSS ?? '';
    const DateNaissance = this.DpiCreateForm.value ?? '';
    const Adresse = this.DpiCreateForm.value ?? '';
    const Telephone = this.DpiCreateForm.value ?? '';
    const Mutuelle = this.DpiCreateForm.value ?? '';
    const MedcinTraitant = this.DpiCreateForm.value ?? '';
    const PersonneAContacter = this.DpiCreateForm.value ?? '';
    const data = {Nom, Prenom, NSS, DateNaissance, Adresse, Telephone, Mutuelle, MedcinTraitant, PersonneAContacter} ;

    try{
      const   response = await apiClient.post(endpoint, data);
      console.log('Form submitted successfully!', response);
    }catch (error) {
      console.error("error cathed :",error);
    }
   
    
   // console.log(Nom, Prenom, NSS, DateNaissance, Adresse, Telephone, Mutuelle, MedcinTraitant, PersonneAContacter);

    // const user: UserAccount = await apiClient.login(email, password);

    // TODO: fix Data
    /*  this.loginSuccess.emit({username: `${user.first_name} ${user.last_name}`, role: user.user_type, Data:this.dpis}); */
  }
  // component logic...
}