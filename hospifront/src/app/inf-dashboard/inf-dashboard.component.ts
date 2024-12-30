import { Component } from '@angular/core';
import { SoinWindowComponent } from '../soin-window/soin-window.component';

interface PatientSoin {
  id: string;
  name: string;
  doctorName: string;
  date: string;
}

@Component({
  selector: 'app-inf-dashboard',
  standalone: true,
  imports: [SoinWindowComponent],
  templateUrl: './inf-dashboard.component.html',
  styleUrl: './inf-dashboard.component.css'
})
export class InfDashboardComponent {
  patients: PatientSoin[] = [
    {
      id: '9028721',
      name: 'Brooklyn Simmons',
      doctorName: 'Dr. Smith',
      date: '21/12/2022'
    },
    {
      id: '9028722',
      name: 'John Cooper',
      doctorName: 'Dr. Johnson',
      date: '21/12/2022'
    },
    {
      id: '9028723',
      name: 'Sarah Wilson',
      doctorName: 'Dr. Brown',
      date: '22/12/2022'
    },
    {
      id: '9028724',
      name: 'Michael Davis',
      doctorName: 'Dr. Miller',
      date: '22/12/2022'
    }
  ];

  openSoinModal() {
    document.getElementById('soinModal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeSoinModal() {
    document.getElementById('soinModal')?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
