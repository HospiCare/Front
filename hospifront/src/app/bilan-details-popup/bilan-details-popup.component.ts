import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BilanBio } from '../bilan-bio';
import { BilanRadio } from '../bilan-radio';

@Component({
  selector: 'app-bilan-details-popup',
  templateUrl: './bilan-details-popup.component.html',
  styleUrls: ['./bilan-details-popup.component.css']
})
export class BilanDetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData: BilanBio | BilanRadio | undefined | null;
  @Output() close = new EventEmitter<void>();

  get testResults() {
    if (this.bilanData && this.isBilanBio(this.bilanData)) {
      return this.bilanData.tests;
    }
    return [];
  }
  get CompteRendu() {
    if (this.bilanData && this.isBilanRadio(this.bilanData)) {
      return this.bilanData.compteRendu;
    }
    return undefined;
  }

  private isBilanBio(bilan: BilanBio | BilanRadio): bilan is BilanBio {
    return 'testTable' in bilan;
  }
  private isBilanRadio(bilan: BilanBio | BilanRadio): bilan is BilanRadio {
    return 'CompteRendu' in bilan;
  }

  onClose() {
    this.close.emit();
  }
}
