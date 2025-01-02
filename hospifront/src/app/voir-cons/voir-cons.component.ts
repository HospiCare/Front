import { Component, inject } from '@angular/core';
import { OrdonnanceDetailsPopupComponent } from '../ordonnance-details-popup/ordonnance-details-popup.component';
import { BilanDetailsPopupComponent } from '../bilan-details-popup/bilan-details-popup.component';
import { Router } from '@angular/router';
import { Consultation } from '../consultation';
import { Ordonnance } from '../ordonnance';

@Component({
  selector: 'app-voir-cons',
  imports: [OrdonnanceDetailsPopupComponent, BilanDetailsPopupComponent],
  templateUrl: './voir-cons.component.html',
  styleUrls: ['./voir-cons.component.css']
})
export class VoirConsComponent {
  consultation?: Consultation;
   
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.consultation = navigation.extras.state['consultation']
    }
    console.log(this.consultation)  
  }

  affiche_validitie(): string {
    return this.consultation?.ordonnance.valide ? "Valide" : "non Valide";
  }

  isOrdonnancePopupVisible = false;
  isBilanPopupVisible = false;
  selectedBilanType: 'biologique' | 'radiologique' = 'biologique';
  
  // Remove the hardcoded bilanRadiologique
  get bilanRadiologique() {
    return this.consultation?.bilanRadio;
  }
  
  get bilanBiologique()  {
    return this.consultation?.bilanBio
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
