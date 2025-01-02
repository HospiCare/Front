import { Component, inject } from '@angular/core';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';
import { BilanChangePopupComponent } from '../bilan-change-popup/bilan-change-popup.component';

interface PatientSoin {
  id: string;
  name: string;
  doctorName: string;
  date: string;
}

@Component({
  selector: 'app-lab-dash',
  standalone: true,
  imports: [BilanChangePopupComponent],
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

  openbilanModal() {
    document.getElementById('bilanModal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closebilanModal() {
    document.getElementById('bilanModal')?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
