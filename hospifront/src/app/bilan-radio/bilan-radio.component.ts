import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BilanRadio } from '../bilan-radio';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bilan-radio-popup',
  standalone: true, // Add this line
  templateUrl: './bilan-radio.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./bilan-radio.component.css'],
})
export class BilanRadioPopupComponent {
  @Input() isVisible: boolean = false;
  @Input() bilanData: BilanRadio | null | undefined = null;
  @Output() close = new EventEmitter<void>();

  uploadedImageUrl: string | null = null;
  compteRendu: string = '';

  ngOnChanges() {
    if (this.bilanData) {
      this.compteRendu = this.bilanData.compteRendu;
    }
  }

  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onClose() {
    if (this.bilanData) {
      this.bilanData.compteRendu = this.compteRendu;
    }
    this.close.emit();
  }
}