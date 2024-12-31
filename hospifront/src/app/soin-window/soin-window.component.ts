import { Component } from '@angular/core';
import { Ordonnance } from '../ordonnance';
import { OrdonnanceDetailsPopupComponent } from '../ordonnance-details-popup/ordonnance-details-popup.component';
import { Soins } from '../soins';

@Component({
  selector: 'app-soin-window',
  templateUrl: './soin-window.component.html',
  styleUrls: ['./soin-window.component.css'],
  imports: [OrdonnanceDetailsPopupComponent]
})
export class SoinWindowComponent {
  isOrdonnancePopupVisible = false;
  selectedOrdonnance: Ordonnance | null = null;
  
  // Initialize array of Soins
  soins: Soins[] = [];

  // Example ordonnance structure
  ordonnance: Ordonnance = {
    medicaments: [
      { nom: 'Medicament 1', dose: 500, duree: 7 },
      { nom: 'Medicament 2', dose: 250, duree: 5 }
    ],
    valide: true
  };

  showOrdonnanceDetails() {
    this.selectedOrdonnance = this.ordonnance;
    this.isOrdonnancePopupVisible = true;
  }

  hideOrdonnanceDetails() {
    this.isOrdonnancePopupVisible = false;
    this.selectedOrdonnance = null;
  }

  addSoin(soinInput: HTMLInputElement, observationInput: HTMLInputElement) {
    if (soinInput.value.trim() && observationInput.value.trim()) {
      // Create new Soins object
      const newSoin: Soins = {
        name: soinInput.value.trim(),
        observation: observationInput.value.trim()
      };
      
      // Add to soins array
      this.soins.push(newSoin);
      
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