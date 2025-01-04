import { Component, inject } from '@angular/core';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';
import { BilanChangePopupComponent } from '../bilan-change-popup/bilan-change-popup.component';
import { CommonModule } from '@angular/common'; // Add this import


interface PatientSoin {
  id: string;
  name: string;
  doctorName: string;
  date: string;
  tests?: { name: string; result: string }[]; // Add tests as an optional field
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
  dashboard? : Consultation[] 
  constructor() {
    this.dashboard = this.loginservice.getDAta() as Consultation []
    
  }
  patients: PatientSoin[] = [];

  selectedPatient: PatientSoin | null = null;
  isPopupVisible: boolean = false;
  openPopup(patient: PatientSoin) {
    console.log('Opening popup for:', patient); // Debug log
    this.selectedPatient = patient;
    this.isPopupVisible = true;
  }
  
  closePopup() {
    console.log('closed'); // Debug log
    this.isPopupVisible = false;
  }
}
