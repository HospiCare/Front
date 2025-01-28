import { Component, Input } from '@angular/core';
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
  @Input() selectedOrdonnance?: Ordonnance | null ;
  @Input() soins?: Soins[] | null  // This is the input property for soins

  // Initialize array of Soins


  // Example ordonnance structure


  showOrdonnanceDetails() {
    this.selectedOrdonnance = this.selectedOrdonnance;
    this.isOrdonnancePopupVisible = true;
  }

  hideOrdonnanceDetails() {
    this.isOrdonnancePopupVisible = false;
  }

  addSoin(soinInput: HTMLInputElement, observationInput: HTMLInputElement) {
    console.log("something");
    if (soinInput.value.trim() && observationInput.value.trim()) {
      // Create new Soins object
      const newSoin: Soins = {
        name: soinInput.value.trim(),
        observation: observationInput.value.trim()
      };

      // Add to soins array
      this.soins?.push(newSoin);
      console.log(this.soins);
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
