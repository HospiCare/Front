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
  soins: Soins[];
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
  listDesPatients: Patientconsultation[] = [
    {
      name: 'Patient 1',
      id: 1,
      Medemail: 'youcef@gmail.com',
      date: '2021-06-01',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament 1', dose: 1, duree: 1 },
          { nom: 'Medicament 2', dose: 1, duree: 1 },
        ],
        valide: true,
      },
      soins: [
        {
          name: 'Soin 1',
          observation: 'Observation 1',
        },
      ],
    },
    {
      name: 'Patient 2',
      id: 2,
      Medemail: 'sara@gmail.com',
      date: '2021-07-15',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament A', dose: 2, duree: 5 },
          { nom: 'Medicament B', dose: 1, duree: 3 },
        ],
        valide: false,
      },
      soins: [
        {
          name: 'Soin 2',
          observation: 'Observation 2',
        },
      ],
    },
    {
      name: 'Patient 3',
      id: 3,
      Medemail: 'khaled@gmail.com',
      date: '2021-08-10',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament X', dose: 3, duree: 7 },
          { nom: 'Medicament Y', dose: 1, duree: 10 },
        ],
        valide: true,
      },
      soins: [
        {
          name: 'Soin 3',
          observation: 'Observation 3',
        },
      ],
    },
    {
      name: 'Patient 4',
      id: 4,
      Medemail: 'amira@gmail.com',
      date: '2021-09-20',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament M', dose: 2, duree: 5 },
          { nom: 'Medicament N', dose: 4, duree: 2 },
        ],
        valide: true,
      },
      soins: [
        {
          name: 'Soin 4',
          observation: 'Observation 4',
        },
      ],
    },
    {
      name: 'Patient 5',
      id: 5,
      Medemail: 'hamid@gmail.com',
      date: '2021-10-05',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament P', dose: 1, duree: 10 },
          { nom: 'Medicament Q', dose: 3, duree: 7 },
        ],
        valide: false,
      },
      soins: [
        {
          name: 'Soin 5',
          observation: 'Observation 5',
        },
      ],
    },
    {
      name: 'Patient 6',
      id: 6,
      Medemail: 'leila@gmail.com',
      date: '2021-11-01',
      ordonnance: {
        medicaments: [
          { nom: 'Medicament Z', dose: 5, duree: 2 },
          { nom: 'Medicament W', dose: 2, duree: 3 },
        ],
        valide: true,
      },
      soins: [
        {
          name: 'Soin 6',
          observation: 'Observation 6',
        },
      ],
    },
  ];
  Selectedpatient: Patientconsultation | null = null;
  SelectOrdonnance: Ordonnance | null = null;
  soins: Soins[] | null = null;
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
