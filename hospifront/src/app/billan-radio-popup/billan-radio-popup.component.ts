import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BilanBio } from '../bilan-bio';
import { BilanRadio } from '../bilan-radio';

@Component({
  selector: 'app-billan-radio-popup',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="popup-overlay" [class.visible]="isVisible">
  <div class="popup-container">
    <div class="popup-content">
      <h2 class="popup-title">
        {{ bilanType === 'biologique' ? 'Bilan Biologique' : 'Bilan Radiologique' }}:
      </h2>
      <!-- Radiological Bilan -->
        <div class="bilan-content">
          <h3>Radio: {{ bilanData?.type }}</h3>
          <div class="image-container">
            <img
              [src]="bilanData?.img"
              alt="Radiological scan"
              class="scan-image"
            />
          </div>
          <textarea class="report-text" [(ngModel)]="compteRendu"></textarea>
        </div>
      <!-- Footer with Cancel and Save Buttons -->
      <div class="popup-footer">
        <button class="cancel-button" (click)="onClose()">Annuler</button>
        <!-- <button class="save-button" (click)="onSave()">Enregister</button> -->
      </div>
    </div>
  </div>
</div>

  `,
  styleUrl: './billan-radio-popup.component.css'
})
export class BillanRadioPopupComponent {
 @Input() isVisible: boolean = false;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData?: BilanRadio | null = null
  @Output() close = new EventEmitter<void>();









  get compteRendu(): string {
    return this.bilanData?.compteRendu || '';
  }

  set compteRendu(value: string) {
    if (this.bilanData) {
      this.bilanData.compteRendu = value;
    }
  }

  onClose() {
    
    this.close.emit();
  }

}
