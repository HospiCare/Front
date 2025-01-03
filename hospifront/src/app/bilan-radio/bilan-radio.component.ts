import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BilanRadio } from '../bilan-radio';

@Component({
  selector: 'app-bilan-radio-popup',
  templateUrl: './bilan-radio.component.html',
  styleUrls: ['./bilan-radio.component.css']
})
export class BilanDetailsPopupComponent {
onImageUpload($event: Event) {
throw new Error('Method not implemented.');
}
  @Input() isVisible: boolean = false;
  @Input() bilanType: 'radiologique' = 'radiologique';
  @Input() bilanData: BilanRadio | undefined | null;
  @Output() close = new EventEmitter<void>();
uploadedImageUrl: any;


  get CompteRendu() {
    if (this.bilanData && this.isBilanRadio(this.bilanData)) {
      return this.bilanData.compteRendu;
    }
    return undefined;
  }


  private isBilanRadio(bilan: BilanRadio): boolean {
    return 'compteRendu' in bilan;
  }

  onClose() {
    this.close.emit();
  }
}
