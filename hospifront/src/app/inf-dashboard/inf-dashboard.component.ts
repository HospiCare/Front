import { Component, inject } from '@angular/core';
import { SoinWindowComponent } from '../soin-window/soin-window.component';
import { LoginRoutingService } from '../login-routing.service';
import { Consultation } from '../consultation';
import { Ordonnance } from '../ordonnance';
import { Soins } from '../soins';
interface Patientconsultation {
  name: string;
  id: number;
  Medemail: string;
  date: string;
  ordonnance: Ordonnance;
  soins: Soins;
}

@Component({
  selector: 'app-inf-dashboard',
  standalone: true,
  imports: [SoinWindowComponent],
  templateUrl: './inf-dashboard.component.html',
  styleUrl: './inf-dashboard.component.css',
})
export class InfDashboardComponent {
  loginservice: LoginRoutingService = inject(LoginRoutingService);
  dashboard?: Consultation[];
  // List of patients with consultation data from back end a changer !!!!!
  listDesPatients: Patientconsultation[] = [{
    name: 'Patient 1',
    id: 1,
    Medemail: 'youcef@gmail.com',
    date: '2021-06-01',
    ordonnance: {
      medicaments: [
        { nom: 'Medicament 1', dose: 1,duree: 1, },
        { nom: 'Medicament 2', dose: 1,duree: 1, },
      ],
      valide: true,
    },
    soins: {
      name: 'Soin 1',
      observation: 'Observation 1',
    },
  }];
  Selectedpatient: Patientconsultation | null = null;
  SelectOrdonnance: Ordonnance | null = null;
  soins: Soins | null = null;
  constructor() {
    this.dashboard = this.loginservice.getDAta() as Consultation[];
  }

  afficherSoinWindow(_t15: Patientconsultation) {
    this.Selectedpatient = _t15;
    this.SelectOrdonnance = _t15.ordonnance;
    this.soins = _t15.soins;
    this.openSoinModal();
  }
  private openSoinModal() {
    document.getElementById('soinModal')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeSoinModal() {
    this.SelectOrdonnance = null; // Reset selected ordonnance
    document.getElementById('soinModal')?.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}
