import { Component, inject } from '@angular/core';
import { BilanRadio } from '../bilan-radio';
import { CommonModule } from '@angular/common'; // Use CommonModule for feature modules
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { BilanRadioPopupComponent } from "../bilan-radio/bilan-radio.component";
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';

interface Patient {
  id: string;
  name: string;
  doctorName: string;
  date: string;
  bilanData?: BilanRadio; // Include optional BilanRadio data
}

@Component({
  selector: 'app-radio-dash',
  standalone: true,
  templateUrl: './radio-dash.component.html',
  styleUrls: ['./radio-dash.component.css'],
  imports: [BilanRadioPopupComponent,FormsModule,CommonModule],
})
export class RadioDashboardComponent {
  loginservice : LoginRoutingService = inject(LoginRoutingService);
  dashboard? : Consultation[] 
  constructor() {
      this.dashboard = this.loginservice.getDAta() as Consultation []
      
  }

  patients: Patient[] = [
    {
      id: '12345',
      name: 'Alice Johnson',
      doctorName: 'Dr. Carter',
      date: '2025-01-02',
      bilanData: {
        type: 'IRM Test',
        compteRendu: 'Initial findings...',
        img: '',
      },
    },
    {
      id: '67890',
      name: 'Bob Smith',
      doctorName: 'Dr. Lee',
      date: '2025-01-03',
    },
  ];

  selectedPatient: Patient | null = null;
  isPopupVisible: boolean = false;

  openPopup(patient: Patient) {
    console.log("Opening popup:", this.isPopupVisible); // Add to verify toggle
    this.selectedPatient = patient;
    this.isPopupVisible = true;
    console.log("Popup should now be visible:", this.isPopupVisible);
}

  closePopup() {
    this.isPopupVisible = false;
    this.selectedPatient = null;
  }
}
