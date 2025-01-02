import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BilanBio } from '../bilan-bio';
import { BilanRadio } from '../bilan-radio';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-bilan-change-popup',
  templateUrl: './bilan-change-popup.component.html',
  imports: [FormsModule,CommonModule], // Include FormsModule here

  styleUrls: ['./bilan-change-popup.component.css']
})
export class BilanChangePopupComponent {
  @Input() isVisible: boolean = true;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData: BilanBio | BilanRadio | undefined | null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<string[]>(); // Emits the updated test results

  editableTestResults: string[] = [];

  ngOnChanges() {
    if (this.bilanData && this.isBilanBio(this.bilanData)) {
      // Initialize editable test results
      this.editableTestResults = this.bilanData.tests.map(test => test.toString());
    }
  }

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
    return 'tests' in bilan;
  }
  private isBilanRadio(bilan: BilanBio | BilanRadio): bilan is BilanRadio {
    return 'compteRendu' in bilan;
  }

  onClose() {
    this.close.emit();
  }

  onSave() {
    // Emit the updated test results
    this.save.emit(this.editableTestResults);
    this.onClose(); // Optionally close the popup after saving
  }
}