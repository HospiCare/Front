import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Patient {
  nss: string;
  name: string;
  email: string;
  phone: string;
  creationDate: string;
  creationTime: string;
}

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
  
  addToDPI(nss: string) {
    // Implement add logic
  }
  constructor(private router: Router) {}
  
    navigateTo(route: string) {
      this.router.navigate([route]);
    }
}
