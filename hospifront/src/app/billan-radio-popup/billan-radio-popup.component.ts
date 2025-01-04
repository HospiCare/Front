import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
        Bilan Radiologique :   {{ this.bilanData?.type }}
      </h2>
      <!-- Radiological Bilan -->
       <div class="bilan-content">
  <label for="report-text" class="content-label">Compte rendu:</label>
  <textarea
  id="report-text"
  class="report-text"
  [(ngModel)]="compteRendu"
  placeholder="Rédigez le compte rendu de ce bilan radiologique..."
></textarea>


<button class="upload" (click)="triggerFileInput()" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; font-size: 16px; cursor: pointer; border-radius: 5px; display: flex; align-items: center;">
  <svg viewBox="0 0 24 24" class="icon" style="width: 24px; height: 24px; margin-right: 8px;">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3z"
      fill="currentColor" />
  </svg>
  Upload File
</button>

<input type="file" id="fileInput" (change)="onFileSelected($event)" style="display: none;" />


 

  

      <!-- Footer with Cancel and Save Buttons -->
      <div class="popup-footer">
        <button class="cancel-button" (click)="onClose()">Annuler</button>
         <button class="save-button" (click)="onSave()">Enregister</button>
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
  imageSrc: string | null = null; // Contient l'URL de l'image
  compteRendu : string =""


  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;



  triggerFileInput(): void {
    const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
    if (fileInput) {
      fileInput.click();
    } // Utilisation de la référence locale pour déclencher le clic
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast de event.target vers HTMLInputElement
    const file = input?.files?.[0]; // Accéder au premier fichier

    if (file) {
      this.bilanData!.img = file;
      // Vous pouvez maintenant utiliser `bilanData.img` pour envoyer le fichier ou effectuer d'autres actions
      console.log(this.bilanData!.img); // Par exemple, afficher l'objet fichier dans la console
    }
   
  }


onSave(){// update to the backend 
this.bilanData?.compteRendu!=this.compteRendu
//bilan data iro7 l back end hna 
this.onClose()
}

  onClose() {
    
    this.close.emit();
  }

}
