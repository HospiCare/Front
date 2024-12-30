import { Component } from '@angular/core';
import { OrdonnanceDetailsPopupComponent } from '../ordonnance-details-popup/ordonnance-details-popup.component';

interface Ordonnance {
  name: string;
  status: string;
  medications?: Array<{
    name: string;
    dose: string;
    duration: string;
  }>;
}

interface Soin {
  name: string;
  observation: string;
}

@Component({
  selector: 'app-soin-window',
  standalone: true,
  imports: [OrdonnanceDetailsPopupComponent],
  templateUrl: './soin-window.component.html',
  styleUrl: './soin-window.component.css'
})
export class SoinWindowComponent {
  isOrdonnancePopupVisible = false;
  selectedOrdonnance: Ordonnance | null = null;
  newSoinName: string = '';
  newSoinObservation: string = '';

  ordonnances: Ordonnance[] = [
    { 
      name: 'Ordonnance1', 
      status: 'validée',
      medications: [
        { name: 'Medicament 1', dose: '500mg', duration: '7 jours' },
        { name: 'Medicament 2', dose: '250mg', duration: '5 jours' }
      ]
    },
    { 
      name: 'Ordonnance2', 
      status: 'en attente',
      medications: [
        { name: 'Medicament 3', dose: '1g', duration: '3 jours' }
      ]
    }
  ];

  soins: Soin[] = [
    { name: 'example 1', observation: 'Ce TP la est un TP d\'un module qui s\'appelle IGL.' },
    { name: 'example 1', observation: 'Ce TP la est un TP d\'un module qui s\'appelle IGL.' }
  ];

  showOrdonnanceDetails(ordonnance: Ordonnance) {
    this.selectedOrdonnance = ordonnance;
    this.isOrdonnancePopupVisible = true;
  }

  hideOrdonnanceDetails() {
    this.isOrdonnancePopupVisible = false;
    this.selectedOrdonnance = null;
  }

  addSoin(soinInput: HTMLInputElement, observationInput: HTMLInputElement) {
    if (soinInput.value.trim() && observationInput.value.trim()) {
      this.soins.push({
        name: soinInput.value.trim(),
        observation: observationInput.value.trim()
      });
      
      // Clear inputs after adding
      soinInput.value = '';
      observationInput.value = '';
    }
  }

  saveSoins() {
    // Here you would typically save the soins to a backend service
    console.log('Saving soins:', this.soins);
  }
}
