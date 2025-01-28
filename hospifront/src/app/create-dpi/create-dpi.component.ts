import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { apiClient } from '../apiService/Client'
import { UserAccount } from '../user-account';

@Component({
  selector: 'app-create-dpi',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-dpi.component.html',
  styleUrls: ['./create-dpi.component.scss']
})
export class CreateDpiComponent implements OnInit {
  medecins: UserAccount[] = [];
  isLoading = true;  // To manage loading state
  errorMessage = '';   // To handle errors
  Errormessage? : string 
  private toNumber(value: any): number {
    const num = Number(value);
    return isNaN(num) ? -1 : num; // Default to 0 if invalid
  }
  ngOnInit(): void {
    const endpoint = 'user/medecins';

    apiClient.get<UserAccount[]>(endpoint).then(
      (data) => {
        this.medecins = data;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load data';
        this.isLoading = false;
      }
    )
    console.log('CreateDpiComponent initialized');
  }

  DpiCreateForm = new FormGroup({
    Nom: new FormControl(''),
    Prenom: new FormControl(''),
    NSS: new FormControl(''),
    DateNaissance: new FormControl(''),
    Adresse: new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    Telephone: new FormControl(''),
    Mutuelle: new FormControl(''),
    MedcinTraitant: new FormControl(''),
    PersonneAContacter: new FormControl(''),
  });

  async onSubmit(): Promise<void> {
    const nom_patient: string = this.DpiCreateForm.value.Nom ?? '';
    const prenom_patient: string = this.DpiCreateForm.value.Prenom ?? '';
    const email_patient: string = this.DpiCreateForm.value.email ?? '';
    const mot_de_passe: string = this.DpiCreateForm.value.password ?? '';
    const NSS: string = this.DpiCreateForm.value.NSS ?? '';
    const date_naissance: string = this.DpiCreateForm.value.DateNaissance ?? '';
    const adresse_patient: string = this.DpiCreateForm.value.Adresse ?? '';
    const telephone_patient: string = this.DpiCreateForm.value.Telephone ?? '';
    const mutuelle: string = this.DpiCreateForm.value.Mutuelle ?? '';
    const medecin_id: string = this.DpiCreateForm.value.MedcinTraitant ?? '';
    const telephone_personne_contact: string = this.DpiCreateForm.value.PersonneAContacter ?? '';

    const endpoint = 'dpi_manager/creer_dpi';
    const data = {nom_patient, prenom_patient, email_patient, mot_de_passe, NSS, date_naissance, adresse_patient, telephone_patient, mutuelle, medecin_id, telephone_personne_contact};
    if (this.toNumber(data.NSS) == -1 || data.NSS === "") {
      
      this.Errormessage = 'NSS should be a number'
    }else{
     if (this.toNumber(data.telephone_patient) == -1 || data.telephone_patient === "") {
      this.Errormessage = 'Telephone should be a number.'
    }else{
      this.Errormessage = ''
    }}

    try{
      const response = await apiClient.post(endpoint, data);
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
