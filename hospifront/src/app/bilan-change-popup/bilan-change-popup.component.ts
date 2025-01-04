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
  @Input() bilanData: any;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{id: string; results: any}>();


  editableTestResults: { name: string, result: any }[] = [];

  ngOnChanges() {
    if (this.bilanData) {
      this.editableTestResults = this.bilanData.tests.map((test: { name: any; result: any; }) => ({
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

  onSave() {
    const results = Object.fromEntries(
      this.editableTestResults.map(test => [test.name, test.result])
    );
    
    this.save.emit({
      id: this.bilanData.id,
      results
    });
  }

  onClose() {
    this.close.emit();
  }
}
