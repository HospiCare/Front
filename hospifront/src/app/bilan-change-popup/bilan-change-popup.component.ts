import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-bilan-change-popup',
  templateUrl: './bilan-change-popup.component.html',
  imports: [FormsModule, CommonModule], // Include FormsModule here
  styleUrls: ['./bilan-change-popup.component.css']
})
export class BilanChangePopupComponent {
  @Input() isVisible: boolean = false;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData: any;
  @Output() close = new EventEmitter<void>();

  editableTestResults: { name: string, result: string }[] = [];

  ngOnChanges() {
    if (this.bilanData && this.isBilanBio(this.bilanData)) {
      // Initialize editable test results with name and result
      this.editableTestResults = this.bilanData.tests.map((test: { name: any; result: any; }) => ({
        name: test.name,
        result: test.result
      }));
    }
  }

  get testResults() {
    if (this.bilanData && this.isBilanBio(this.bilanData)) {
      return this.bilanData.tests;
    }
    return [];
  }

  private isBilanBio(bilan: any): boolean {
    return 'tests' in bilan;
  }

  onClose() {
    this.close.emit();
  }
}
