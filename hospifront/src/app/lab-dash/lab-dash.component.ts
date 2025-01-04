import { Component, inject } from '@angular/core';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';
import { BilanChangePopupComponent } from '../bilan-change-popup/bilan-change-popup.component';
import { CommonModule } from '@angular/common'; // Add this import
import { BilanBio } from '../bilan-bio';


interface Patientbio {
  id: string;
  name: string;
  doctorName: string;
  date: string;
  bilan: BilanBio;
}

@Component({
  selector: 'app-lab-dash',
  standalone: true,
  imports: [BilanChangePopupComponent,CommonModule],
  templateUrl: './lab-dash.component.html',
  styleUrl: './lab-dash.component.css'
})
export class labDashboardComponent {

  loginservice : LoginRoutingService = inject(LoginRoutingService);
  dashboard? :  Consultation[];
  constructor() {
    this.dashboard = this.loginservice.getDAta() as Consultation []
  }
  listDesPatients: Patientbio[] = [{
    id: '1',
    name: 'Patient 1',
    doctorName: 'Dr. A',
    date: '01/01/2021',
    bilan: {
      img: '',
      tests: [0,0,0,0,0,0,0],
      type: 'biologique'
      
    }
  },];


  selectedPatient: BilanBio | null = null;
  isPopupVisible: boolean = false;
  openPopup(patient: Patientbio) {
    console.log('Opening popup for:', patient); // Debug log
    this.selectedPatient = patient.bilan;
    this.isPopupVisible = true;
  }
  
  closePopup() {
    console.log('closed'); // Debug log
    this.isPopupVisible = false;
  }
}
