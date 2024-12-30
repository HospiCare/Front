import { Component } from '@angular/core';
import { OrdonnanceDetailsPopupComponent } from '../ordonnance-details-popup/ordonnance-details-popup.component';
import { BilanDetailsPopupComponent } from '../bilan-details-popup/bilan-details-popup.component';

@Component({
  selector: 'app-voir-cons',
  imports: [OrdonnanceDetailsPopupComponent, BilanDetailsPopupComponent],
  templateUrl: './voir-cons.component.html',
  styleUrls: ['./voir-cons.component.css']
})
export class VoirConsComponent {
  isOrdonnancePopupVisible = false;
  isBilanPopupVisible = false;
  selectedBilanType: 'biologique' | 'radiologique' = 'biologique';
  
  bilanRadiologique = {
    nom: 'haja'
  };
  
  bilanBiologique = {
    nom: 'Bilan sanguin'
  };

  showOrdonnanceDetails() {
    this.isOrdonnancePopupVisible = true;
  }

  hideOrdonnanceDetails() {
    this.isOrdonnancePopupVisible = false;
  }

  showBilanDetails(type: 'biologique' | 'radiologique') {
    this.selectedBilanType = type;
    this.isBilanPopupVisible = true;
  }

  hideBilanDetails() {
    this.isBilanPopupVisible = false;
  }
}
