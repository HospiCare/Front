import { Component, inject } from '@angular/core';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';
import { CommonModule } from '@angular/common'; // Add this import
import { BilanRadio } from '../bilan-radio';
import { BillanRadioPopupComponent } from "../billan-radio-popup/billan-radio-popup.component";
interface PatientbRadio {
  id: string;
  name: string;
  doctorName: string;
  date: string;
  bilan: BilanRadio;
}

@Component({
  selector: 'app-radio-dash',
  imports: [CommonModule, BillanRadioPopupComponent],
  templateUrl: './radio-dash.component.html',
  styleUrl: './radio-dash.component.css'
})
export class RadioDashComponent {
   loginservice : LoginRoutingService = inject(LoginRoutingService);
    dashboard? :  Consultation[];
    constructor() {
      this.dashboard = this.loginservice.getDAta() as Consultation []
    }
    listDesPatients: PatientbRadio[] = [{
      id: '1',
      name: 'Patient 1',
      doctorName: 'Dr. A',
      date: '01/01/2021',
      bilan: {
        img: '',
        compteRendu: 'compte rendu',
        type: 'biologique'
        
      }
    },];
  
  
    selectedPatient: BilanRadio | null = null;
    isPopupVisible: boolean = false;
    openPopup(patient: PatientbRadio) {
      console.log('Opening popup for:', patient); // Debug log
      this.selectedPatient = patient.bilan;
      this.isPopupVisible = true;
    }
    
    closePopup() {
      console.log('closed'); // Debug log
      this.isPopupVisible = false;
    }

}
