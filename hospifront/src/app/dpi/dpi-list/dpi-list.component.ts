import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../patient';
import { Consultation } from '../../consultation';
import { DPI } from '../../dpi';
import { LoginRoutingService } from '../../login-routing.service';
import { DpiService } from '../../dpi/dpi.service';
import { QRCodeService } from '../../dpi/qrcode.service'; 
import { RouterModule } from '@angular/router';
import { formToJSON } from 'axios';


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
  isLoading: boolean = false; 
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dpiService: DpiService, 
    private qrCodeService: QRCodeService
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
          console.log(patient)
          return {
            id: patient?.id,
            adresse: patient?.adresse,
            telephone_contact: patient?.telephone_contact,
            nss: patient?.nss ,
            name: patient?.name ,
            email: patient?.email ,
            phone: dpi?.phone ,  // Accès à dpi.phone
            creationDate: dpi?.creationDate?.split(' ')[0] ,  // Accès à dpi.creationDate
            creationTime: dpi?.creationDate?.split(' ')[1],
            date_naissance: patient?.date_naissance,
          };
        });
        
        this.patients = this.dossiers
        this.filteredPatients = [...this.patients];  // Utilisez 'dossiers' pour la recherche
        
      },
      (error) => {
        console.error('Erreur lors de la récupération des DPI :', error);
      }
    );
  }



  searchDPIs(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    // First try to match NSS exactly
    console.log("serch term : "+searchTerm)
    const nssPatientsMatch = this.patients.filter(patient => 
      patient.nss === searchTerm
    );
    console.log("nss patient : "+nssPatientsMatch)

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
      this.searchByQR(file);
    }
  }

  searchByQR(file: File): void {
    this.isLoading = true;
    this.errorMessage = null;
    console.log(`Uploading file: ${file.name}`);
    console.log('Fichier:', file);
  
    this.qrCodeService.searchByQRCode(file).subscribe({
      next: (response) => {
        console.log('Réponse du serveur:', response);
        this.isLoading = false;
  
        const data = response?.data;
  
        if (data && data.success) {
          console.log('DPI récupérés :', data);
  
          const patient = data.patient;
          const dpi = data.dpi_id;
  
          this.dossiers = [{
            nss: patient?.nss,
            name: patient?.name,
            email: patient?.email,
            phone: patient?.phone,
            creationDate: data.creationDate?.split(' ')[0], 
            creationTime: data.creationDate?.split(' ')[1], 
          }];
  
          this.patients = this.dossiers;
          this.filteredPatients = [...this.patients]; 
        } else {
          console.error('Réponse inattendue du serveur:', data);
          this.errorMessage = 'Données mal formatées reçues du serveur.';
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.log('Erreur lors de la recherche par QR code:', error);
        this.errorMessage = 'Erreur lors de la recherche. Veuillez réessayer.';
        this.isLoading = false;
      },
    });
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
      id: patient.id,
      nom: patient.name.split(' ')[1], // Assuming name is "FirstName LastName"
      prenom: patient.name.split(' ')[0],
      nss: patient.nss,
      dateNaissance: patient.date_naissance, // You'll need to add this to your patient interface if available
      adresse: patient.adresse, // You'll need to add this to your patient interface if available
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