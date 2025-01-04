import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BilanBio } from '../bilan-bio';

@Component({
  selector: 'app-bilan-change-popup',
  templateUrl: './bilan-change-popup.component.html',
  imports: [FormsModule, CommonModule], // Include FormsModule here
  styleUrls: ['./bilan-change-popup.component.css']
})
export class BilanChangePopupComponent {
  @Input() isVisible: boolean = false;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData?: BilanBio | null;
  @Output() close = new EventEmitter<void>();
  tests? : number[] = [0,0,0,0,0,0,0];

 onClose() {
    this.bilanData!.tests = [];
    for (let i = 0; i < this.tests!.length; i++) {
      this.bilanData?.tests.push(this.tests![i]); 
    }
    console.log('Closing popup with data:', this.bilanData); // in backend get this back 
    this.close.emit();
  }
}
