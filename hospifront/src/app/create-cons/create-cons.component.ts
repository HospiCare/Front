import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Medicament } from '../medicament';
import { BilanBio } from '../bilan-bio';
import { BilanRadio } from '../bilan-radio';
import { Ordonnance } from '../ordonnance';
import { Consultation, Resume } from '../consultation';
import { DPIListComponent } from '../dpi/dpi-list/dpi-list.component';
import { Soins } from '../soins';
import { Frais } from '../frais';
import { __makeTemplateObject } from 'tslib';
import { apiClient } from '../apiService/Client';
import { UserAccount } from '../user-account';

@Component({
  selector: 'app-create-cons',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-cons.component.html',
  styleUrls: ['./create-cons.component.css']
})
export class CreateConsComponent {
    patient: Patient | undefined;
    consultations : Consultation[] | undefined;
    currentDate: string;
    medicaments: Medicament[] = [];
    laborantin_id: number = -1;
    radiologue_id: number = -1;
    infirmier_id: number = -1;
    frais : Frais | null = null
    nouveauMedicament: Medicament = {
        name: '',
        dosage: 0,
        duration: 0,
        frequency: '',
    };
    selectedRow: number | null = null;
    selectedBilanBioType: string | null = null;
    selectedBilanRadioType: string | null = null;
    bilanBio: BilanBio | null = null;
    bilanRadio: BilanRadio | null = null;
    resume: string = ''; // Add this property
    Soins: Soins | null = null;
    dpilist:DPIListComponent | undefined
    id:number | undefined

    list_infirmier: UserAccount[] = [];
    list_laborantin: UserAccount[] = [];
    list_radiologue: UserAccount[] = [];
    isLoading = true;  // To manage loading state
    errorMessage = '';   // To handle errors

    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
            this.patient = navigation.extras.state['patient'];
            this.consultations = navigation.extras.state['consultations'];
            this.id=navigation.extras.state['id'];

        }
        this.currentDate = this.formatDate(new Date());
    }

    private formatDate(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    ajouterMedicament() {
        if (this.nouveauMedicament.name &&
            this.nouveauMedicament.dosage > 0 &&
            this.nouveauMedicament.duration > 0) {
        this.medicaments.push({...this.nouveauMedicament});
        this.nouveauMedicament = {
            name: '',
            dosage: 0,
            duration: 0,
            frequency: '', // TODO: add frequency
        };
        this.selectedRow = null;
    }
}

    supprimerMedicament() {
        if (this.selectedRow !== null) {
            this.medicaments.splice(this.selectedRow, 1);
            this.selectedRow = null;
        }
    }

    selectRow(index: number) {
        this.selectedRow = this.selectedRow === index ? null : index;
    }

    ngOnInit() {
        if (!this.patient) {
            this.router.navigate(['/dpi-list']);
        }

        const list_infirmier_endpoit = "user/infirmiers"
        apiClient.get<UserAccount[]>(list_infirmier_endpoit).then(
          (data) => {
            this.list_infirmier = data;
            this.isLoading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load data';
            this.isLoading = false;
          }
        )

        const list_laborantin_endpoit = "user/laborantins"
        apiClient.get<UserAccount[]>(list_laborantin_endpoit).then(
          (data) => {
            this.list_laborantin = data;
            this.isLoading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load data';
            this.isLoading = false;
          }
        )

        const list_radiologue_endpoit = "user/radiologues"
        apiClient.get<UserAccount[]>(list_radiologue_endpoit).then(
          (data) => {
            this.list_radiologue = data;
            this.isLoading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load data';
            this.isLoading = false;
          }
        )
    }

    onBilanBioChange() {
        if (this.selectedBilanBioType) {
            this.bilanBio = {
                type: this.selectedBilanBioType,
                img: '',
                tests:[],

            };
            this.bilanRadio=null;
            console.log('Bilan Biologique créé:', this.bilanBio);
        }
    }

    onBilanRadioChange() {
        if (this.selectedBilanRadioType) {
            this.bilanRadio = {
                type: this.selectedBilanRadioType,
                compteRendu:'',
                img:'',
            };
            this.bilanBio=null;
            console.log('Bilan Radiologique créé:', this.bilanRadio);
        }
    }

    async enregistrerConsultation() {
      let consultation: Consultation;

      // create consultation
      const consultation_create_enpoint = 'consultation';
      const consultation_data = {dpi: this.patient?.id}
      try{
        const response = await apiClient.post<{consultation: Consultation}>(consultation_create_enpoint, consultation_data);
        consultation = response.consultation;
      } catch (error) {
        console.error("error cathed :",error);
        return
      }
      console.log('consultation created successfully!', consultation);

      // create ordonnance & medicaments
      const ordonnance_create_enpoint = `consultation/${consultation.id}/creer_ordonnance`;
      const ordonnance_data = {
        ordonnance : {
          notes: "",
        },
        medicaments: [...this.medicaments],
      }
      try {
        const response = await apiClient.post<{ordonnance: Ordonnance}>(ordonnance_create_enpoint, ordonnance_data);
        console.log('ordonnance created successfully!', response);
      } catch (error) {
        console.error("error cathed :",error);
      }

      // TODO; infirmier?

      // create bilan rad
      if (this.bilanBio) {
        const bilan_laborantin_create_enpoint = `bilan/creer_bilan_biologique`;
        const bilan_laborantin_data = {
          consultation: consultation.id,
          laborantin: this.laborantin_id,
          test_type: this.selectedBilanBioType,
        }
        try {
          const response = await apiClient.post(bilan_laborantin_create_enpoint, bilan_laborantin_data);
          console.log('bilan_laborantin created successfully!', response);
        } catch (error) {
          console.error("error cathed :",error);
        }
      }

      // create bilan rad
      if (this.bilanRadio) {
        const bilan_radiologuique_create_enpoint = `bilan/creer_bilan_radiologique`;
        const bilan_radiologuique_data = {
          consultation: consultation.id,
          radiologue: this.radiologue_id,
          description: this.selectedBilanRadioType,
        }
        try {
          const response = await apiClient.post(bilan_radiologuique_create_enpoint, bilan_radiologuique_data);
          console.log('bilan_radiologuique created successfully!', response);
        } catch (error) {
          console.error("error cathed :",error);
        }
      }

      // create resume
      const resume_create_enpoint = `consultation/${consultation.id}/resume/create`;
      const resume_data = {
        contenu: this.resume == '' ? "nothing" : this.resume,
        antecedants: 'something not blank', // TODO: add antecedants
      }
      try {
        const response = await apiClient.post<{resume: Resume}>(resume_create_enpoint, resume_data);
        console.log('resume created successfully!');
      } catch (error) {
        console.error("error cathed :",error);
      }

        //this.consultations?.push(consultation)
        this.router.navigate(['doctor-dash'], {
            state: {
                consultations: this.consultations,
                id:this.id
              }
          });

        // Here you would typically send this to your backend service
        // For now, we'll just log it to the console

    }
}
