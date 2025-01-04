import { Component, inject } from '@angular/core';
import { SoinWindowComponent } from '../soin-window/soin-window.component';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';

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
  loginservice : LoginRoutingService = inject(LoginRoutingService);
  dashboard? : Consultation[] 
  constructor() {
    this.dashboard = this.loginservice.getDAta() as Consultation []
    
  }
  patients: PatientSoin[] = [{
    id:'02128821',
    name: 'John Doe',
    doctorName: 'Dr. Jane Doe',
    date: '12/12/2021'
  }];

  openSoinModal() {
    document.getElementById('soinModal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeSoinModal() {
    document.getElementById('soinModal')?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
