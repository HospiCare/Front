import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../patient';
import { Consultation } from '../../consultation';
import { DPI } from '../../dpi';
import { LoginRoutingService } from '../../login-routing.service';
import { DpiService } from '../../dpi/dpi.service'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dpi-list',
  templateUrl: './dpi-list.component.html',
  imports : [RouterModule],
  styleUrls: ['./dpi-list.component.css']
})
export class DPIListComponent implements OnInit {
  patients: Patient[] = [];
  dossiers: any[] = [];
  dpis: DPI[] = [];
  id: number = 0;
  loginservice: LoginRoutingService = inject(LoginRoutingService);
  consultations: Consultation[] = [];
  filteredPatients: Patient[] = [];
  realdpi: DPI[] | undefined;
  selectedFile: File | null = null

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dpiService: DpiService, 
  ) { }
  ngOnInit() {
    this.dpiService.getDPIList().subscribe(
      (data: any[]) => {
        console.log('DPI récupérés :', data); // Déboguer la structure de la réponse
  
        this.dpis = data; // Stocke la réponse dans dpis
  
        // Crée un tableau de dossiers en extrayant chaque "dpi" de chaque objet
        this.dossiers = data.map(dpiObj => {
          const dpi = dpiObj.dpi;  // Accéder à l'objet "dpi" dans chaque élément de data
          const patient = dpiObj.patient;  // Accéder à l'objet "patient" dans chaque élément de data
  
          return {
            nss: patient?.nss || 'Inconnu',
            name: patient?.name || 'Inconnu',
            email: patient?.email || '',
            phone: dpi?.phone || '',  // Accès à dpi.phone
            creationDate: dpi?.creationDate?.split(' ')[0] || 'Non disponible',  // Accès à dpi.creationDate
            creationTime: dpi?.creationDate?.split(' ')[1] || ''  // Accès à dpi.creationDate
          };
        });
  
        // Initialisez la liste filtrée pour la recherche
        this.filteredPatients = [...this.dossiers];  // Utilisez 'dossiers' pour la recherche
      },
      (error) => {
        console.error('Erreur lors de la récupération des DPI :', error);
      }
    );
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



  triggerFileInput(): void {
    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      console.log('File selected:', file);

      // You can now process the file, e.g., upload it to a server
      this.uploadFile(file);
    }
  }

  // Mock function to handle file upload
  uploadFile(file: File): void {
    // Replace this with actual upload logic
    console.log(`Uploading file: ${file.name}`);
    // Example: Use an HTTP service to send the file to the server
    // this.httpClient.post('your-server-endpoint', file).subscribe(...);
    





  }
 
  searchByQR(): void {


  






  }

  createDPI(): void {
    // Implement create logic
    this.router.navigate(['creer-dpi'], {
      
    });
    
  }

  viewDPI(nss: string) {
    // Implement view logic
  }
  
  addToDPI(patient: Patient) {
    // Navigate to create-cons with patient data
    this.router.navigate(['create-cons'], {
      state: { 
        patient: patient,
        consultations: this.dpis[this.patients.indexOf(patient)].consultations,
        id: this.patients.indexOf(patient)
      }
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

    // Navigate to patient-details with NSS in URL and both patient and DPI data in state
    this.router.navigate(['patient-dpi', patient.nss], {
      state: { 
        patient: patientDetails,
        consultations: this.dpis[this.patients.indexOf(patient)].consultations
      }
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Ajoutez cette méthode trackByNss
  trackByNss(index: number, patient: Patient): string {
    return patient.nss;  // Utilisez l'NSS comme identifiant unique
  }
  
}
