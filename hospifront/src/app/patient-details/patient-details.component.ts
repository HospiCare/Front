import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Consultation {
  id: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient = {
    nom: 'Doe',
    prenom: 'John',
    nss: '187364523412',
    dateNaissance: '01/01/1990',
    adresse: '123 Rue Example',
    tel: '0123456789',
    mutuelle: 'CNAS',
    personneContact: 'Jane Doe - 0987654321'
  };

  consultations: Consultation[] = [
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' },
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' },
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' },
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' },
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' },
    { id: '87364523', date: '21/12/2022', time: '10:40 PM' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nss = params['nss'];
      // In a real application, you would fetch patient data using this NSS
    });
  }

  exporterDPI(): void {
    console.log('Exporter DPI');
  }

  voirConsultation(id: string): void {
    console.log('Voir consultation:', id);
  }
}