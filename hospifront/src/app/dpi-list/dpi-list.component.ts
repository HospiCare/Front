import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from '../patient';

@Component({
  selector: 'app-dpi-list',
  templateUrl: './dpi-list.component.html',
  styleUrls: ['./dpi-list.component.css']
})
export class DPIListComponent implements OnInit {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];

  ngOnInit() {
    // In a real application, this would come from a service
    this.patients = [
      {
        nss: '187364523412',
        name: 'Brooklyn Simmons',
        email: 'brooklyns@mail.com',
        phone: '(603) 555-0123',
        creationDate: '21/12/2022',
        creationTime: '10:40 PM'
      },
      {
        nss: '193874563789',
        name: 'Kristin Watson',
        email: 'kristinw@mail.com',
        phone: '(219) 555-0114',
        creationDate: '22/12/2022',
        creationTime: '05:20 PM'
      },
      {
        nss: '223847569321',
        name: 'Jacob Jones',
        email: 'jacobj@mail.com',
        phone: '(319) 555-0115',
        creationDate: '23/12/2022',
        creationTime: '12:40 PM'
      }
    ];
    this.filteredPatients = [...this.patients];
  }

  searchDPIs(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // First try to match NSS exactly
    const nssPatientsMatch = this.patients.filter(patient => 
      patient.nss === searchTerm
    );

    // If NSS match is found, show only those results
    if (nssPatientsMatch.length > 0) {
      this.filteredPatients = nssPatientsMatch;
      return;
    }

    // If no exact NSS match, search all fields
    this.filteredPatients = this.patients.filter(patient => 
      patient.nss.includes(searchTerm) 
    );
  }

  searchByQR(): void {
    // Implement QR code search logic
    console.log('QR code search clicked');
  }

  createDPI(): void {
    // Implement create logic
    console.log('Create DPI clicked');
  }

  viewDPI(nss: string) {
    // Implement view logic
  }
  
  addToDPI(patient: Patient) {
    // Navigate to create-cons with patient data
    this.router.navigate(['create-cons'], {
      state: { patient: patient }
    });
    // Implement add logic
  }

  navigateToPatientDetails(patient: Patient) {
    // Convert patient data to match the patient-details format
    const patientDetails = {
      nom: patient.name.split(' ')[1], // Assuming name is "FirstName LastName"
      prenom: patient.name.split(' ')[0],
      nss: patient.nss,
      dateNaissance: '', // You'll need to add this to your patient interface if available
      adresse: '', // You'll need to add this to your patient interface if available
      tel: patient.phone,
      mutuelle: '', // You'll need to add this to your patient interface if available
      personneContact: '', // You'll need to add this to your patient interface if available
    };

    // Navigate to patient-details with NSS in URL and patient data in state
    this.router.navigate(['patient-dpi', patient.nss], {
      state: { patient: patientDetails }
    });
  }

  constructor(private router: Router) {}
  
    navigateTo(route: string) {
      this.router.navigate([route]);
}
}
