import { Component, inject, OnInit } from '@angular/core';
import { LoginRoutingService } from '../login-routing.service';
import { BilanChangePopupComponent } from '../bilan-change-popup/bilan-change-popup.component';
import { CommonModule } from '@angular/common'; // Add this import
import { BilanResponse, BilanService, BilanType } from './bilanService';


interface PatientSoin {
  id: string;
  name: string;
  doctorName: string;
  date: string;
  BilanType: BilanType;
  graphData: any;

  tests?: { name: string; result: any }[];
  originalBilan?: BilanResponse; // Store original bilan data
}

@Component({
  selector: 'app-lab-dash',
  standalone: true,
  imports: [BilanChangePopupComponent,CommonModule],
  templateUrl: './lab-dash.component.html',
  styleUrl: './lab-dash.component.css'
})
export class labDashboardComponent implements OnInit {

  loginservice: LoginRoutingService = inject(LoginRoutingService);
  bilanService: BilanService = inject(BilanService);
  
  patients: PatientSoin[] = [];
  selectedPatient: PatientSoin | null = null;
  isPopupVisible: boolean = false;
  // patients: PatientSoin[] = [
  //   {
  //     id: '9028721',
  //     name: 'Brooklyn Simmons',
  //     doctorName: 'Dr. Smith',
  //     date: '21/12/2022',
  //     tests: [
  //       { name: 'Test 1', result: 'Positive' },
  //       { name: 'Test 2', result: 'Negative' }
  //     ],
  //     BilanType: 'Bilan sanguin',
  //     graphData: undefined
  //   },
  //   {
  //     id: '9028722',
  //     name: 'John Cooper',
  //     doctorName: 'Dr. Johnson',
  //     date: '21/12/2022',
  //     tests: [
  //       { name: 'Test 1', result: 'Negative' }
  //     ],
  //     BilanType: 'Bilan sanguin',
  //     graphData: undefined
  //   },
  //   {
  //     id: '9028723',
  //     name: 'Sarah Wilson',
  //     doctorName: 'Dr. Brown',
  //     date: '22/12/2022',
  //     tests: [
  //       { name: 'Test 1', result: 'Positive' }
  //     ],
  //     BilanType: 'Bilan sanguin',
  //     graphData: undefined
  //   },
  //   {
  //     id: '9028724',
  //     name: 'Michael Davis',
  //     doctorName: 'Dr. Miller',
  //     date: '22/12/2022',
  //     tests: [
  //       { name: 'Test 1', result: 'Negative' }
  //     ],
  //     BilanType: 'Bilan sanguin',
  //     graphData: undefined
  //   },
  // ];
  ngOnInit() {
    this.loadBilans();
  }

  loadBilans() {
    this.bilanService.getBilansList().subscribe({
      next: (bilans) => {
        this.patients = bilans.map(bilan => ({
          id: bilan.id_bilan.toString(),
          name: `${bilan.patient.nom} ${bilan.patient.prenom}`,
          doctorName: bilan.medecin?.email || 'Non assigné',
          date: new Date(bilan.date_creation_consultation).toLocaleDateString(),
          tests: bilan.type_bilan ? [
            { name: bilan.type_bilan, result: bilan.resultat }
          ] : [],
          BilanType: bilan.type_bilan,
          graphData: bilan.graphique,
          originalBilan: bilan
        }));
      },
      error: (error) => {
        console.error('Error loading bilans:', error);
        this.showError('Failed to load bilans. Please try again later.');
      }
    });
  }

  private formatTests(resultat: any): { name: string; result: any }[] {
    if (!resultat) return [];
    return Object.entries(resultat).map(([name, result]) => ({
      name,
      result
    }));
  }
  openPopup(patient: PatientSoin) {
    this.selectedPatient = patient;
    this.isPopupVisible = true;
  }
  
  closePopup() {
    console.log('closed'); // Debug log
    this.isPopupVisible = false;
  }
  handleTestUpdate(data: { id: string; results: any }) {
    this.bilanService.updateBilanResults(Number(data.id), data.results).subscribe({
      next: () => {
        this.loadBilans();
        this.closePopup();
      },
      error: (error) => {
        console.error('Error updating bilan:', error);
        this.showError('Erreur lors de la mise à jour du bilan.');
      }
    });
  }

  showError(message: string) {
    // Implement your error display logic here, e.g., using a toast notification or an alert
    alert(message); // Simple alert for demonstration
  }
}
