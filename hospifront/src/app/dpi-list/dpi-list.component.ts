import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { Consultation } from '../consultation';
import { DPI } from '../dpi';
import { LoginRoutingService } from '../login-routing.service';
@Component({
  selector: 'app-dpi-list',
  templateUrl: './dpi-list.component.html',
  styleUrls: ['./dpi-list.component.css']
})
export class DPIListComponent implements OnInit {
  patients: Patient[]=[];
  dpis:DPI[]=[]
  id:number=0
  loginservice : LoginRoutingService = inject(LoginRoutingService);
  consultations:Consultation[]=[]
  filteredPatients: Patient[]= [];
  realdpi: DPI[] | undefined;
  
  

  ngOnInit() {
    
    // In a real application, this would come from a service
    for (let index = 0; index < this.realdpi!.length; index++) {
       this.patients.push(this.realdpi![index].patient);  
    }

  this.dpis = this.realdpi!;
    this.dpis[this.id].consultations=this.consultations
    
    
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
  
  addToDPI(patient: Patient ) {
    // Navigate to create-cons with patient data
    this.router.navigate(['create-cons'], {
      state: { patient: patient ,
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

  constructor(private router: Router , private route : ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.consultations = navigation.extras.state['consultations'];
      this.id=navigation.extras.state['id'];

  }
  this.realdpi = this.loginservice.getDAta() as DPI[];
  console.log(this.realdpi);
  }
  
    navigateTo(route: string) {
      this.router.navigate([route]);
}
}
