import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';
import { Consultation } from '../consultation';



@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient: any | undefined;
  nss: string | null = null;
  consultations: Consultation[] = []; // Property to hold consultations

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Get the patient data from router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.patient = navigation.extras.state['patient'];
      this.consultations = navigation.extras.state['consultations'] || []; // Get consultations
    }
  }

  ngOnInit() {
    // Get NSS from URL
    this.nss = this.route.snapshot.paramMap.get('nss');
    
    if (!this.patient && this.nss) {
      // If we have NSS but no patient data, you could fetch the patient data here
      // this.patientService.getPatientByNss(this.nss).subscribe(...);
    } else if (!this.patient && !this.nss) {
      // If we have neither patient data nor NSS, redirect to list
      this.router.navigate(['/dpi-list']);
    }
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