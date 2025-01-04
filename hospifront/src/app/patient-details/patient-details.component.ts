import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { Consultation } from '../consultation';
import { LoginRoutingService } from '../login-routing.service';
import { DPI } from '../dpi';
import { ConsultationService } from './consultation.service';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  logindpi? : DPI 
  patient: any | undefined;
  nss: string | null = null;
  consultations?: Consultation[] | null = []; // Property to hold consultations
  loginservice : LoginRoutingService = inject(LoginRoutingService);
  consultationService = inject(ConsultationService);


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Get the patient data from router state
    if(this.loginservice.getDAta()){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.patient = navigation.extras.state['patient'];
      this.consultations = navigation.extras.state['consultations'] || []; // Get consultations
    }}else{
    this.logindpi = this.loginservice.getDAta() as DPI
    this.patient = this.logindpi?.patient
    this.consultations = this.logindpi?.consultations;
    }

  }
  

  
  ngOnInit() {
   this.router.navigate(['patient-dpi/:nss'], {
   state: {
    patient: this.patient,  
    consultations: this.consultations
  }
});

    // Vérification de la récupération des données depuis le router
    const patientState = this.router.getCurrentNavigation()?.extras.state?.['patient'];
    console.log("Patient State:", patientState); // Vérifier si le patient est bien récupéré
    this.patient = patientState;
    
    this.nss = this.route.snapshot.paramMap.get('nss');
    console.log("NSS récupéré:", this.nss); // Vérifier si NSS est récupéré correctement
  
   
      console.log("Patient ID:", this.patient.id); // Vérifier l'ID du patient
      this.loadConsultations(this.patient.id);
    
}
  

  loadConsultations(patientId: number) {
    this.consultationService.getConsultations(patientId).subscribe({
      next: (data) => {
        this.consultations = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des consultations :', err);
      },
    });
  }
  exporterDPI() {
    // Get the QR code image element
    const qrCodeImg = document.querySelector('.qr-code img') as HTMLImageElement;
    
    if (!qrCodeImg) {
      console.error('QR code image not found');
      return;
    }

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    
    // Set the download filename using patient's info
    const fileName = `qr-code-${this.patient?.name}-${this.patient?.nss}.png`;
    
    // If the image is from a real URL (not placeholder)
    if (!qrCodeImg.src.includes('placeholder')) {
      downloadLink.href = qrCodeImg.src;
    } else {
      // For placeholder images or canvas-generated QR codes
      // Create a canvas to handle the image data
      const canvas = document.createElement('canvas');
      canvas.width = qrCodeImg.width;
      canvas.height = qrCodeImg.height;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(qrCodeImg, 0, 0);
        downloadLink.href = canvas.toDataURL('image/png');
      }
    }
    
    // Set download attributes
    downloadLink.download = fileName;
    
    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  voirConsultation(consultation: Consultation) {
    this.router.navigate(['voir-cons'], {
      state: { 
          consultation: consultation,
          
        }
    });
    // Implement consultation view functionality
  }
}