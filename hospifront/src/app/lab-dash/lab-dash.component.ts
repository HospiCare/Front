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
  patients: PatientSoin[] = [
    { 
      id: '9028721', 
      name: 'Brooklyn Simmons', 
      doctorName: 'Dr. Smith', 
      date: '21/12/2022',
      tests: [
        { name: 'Test 1', result: 'Positive' }, 
        { name: 'Test 2', result: 'Negative' }
      ]
    },
    { 
      id: '9028722', 
      name: 'John Cooper', 
      doctorName: 'Dr. Johnson', 
      date: '21/12/2022',
      tests: [
        { name: 'Test 1', result: 'Negative' }
      ]
    },
    { 
      id: '9028723', 
      name: 'Sarah Wilson', 
      doctorName: 'Dr. Brown', 
      date: '22/12/2022',
      tests: [
        { name: 'Test 1', result: 'Positive' }
      ]
    },
    { 
      id: '9028724', 
      name: 'Michael Davis', 
      doctorName: 'Dr. Miller', 
      date: '22/12/2022',
      tests: [
        { name: 'Test 1', result: 'Negative' }
      ]
    },
  ];

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
