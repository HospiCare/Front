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
onSave() {
throw new Error('Method not implemented.');
}
  @Input() isVisible: boolean = false;
  @Input() bilanData: any;
  @Output() close = new EventEmitter<void>();

  editableTestResults: { name: string, result: any }[] = [];

  ngOnChanges() {
    if (this.bilanData ) {
      // Initialize editable test results with name and result
      this.editableTestResults = this.bilanData.tests.map((test: { name: string; result: any; }) => ({
        name: test.name,
        result: test.result
      }));
    }
  }

  get testResults() {
    if (this.bilanData ) {
      return this.bilanData.tests;
    }
    return [];
  }



  onClose() {
    this.close.emit();
  }
}
