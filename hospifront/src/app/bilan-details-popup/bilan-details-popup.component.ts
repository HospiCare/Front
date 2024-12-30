import { Component, Input, Output, EventEmitter } from '@angular/core';

interface TestResult {
  name: string;
  value: string;
}

@Component({
  selector: 'app-bilan-details-popup',
  templateUrl: './bilan-details-popup.component.html',
  styleUrls: ['./bilan-details-popup.component.css']
})
export class BilanDetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Input() bilanType: 'biologique' | 'radiologique' = 'biologique';
  @Input() bilanData: any;
  @Output() close = new EventEmitter<void>();

  // Define the tests array
  tests: TestResult[] = [
    { name: 'Test1', value: '7,90' },
    { name: 'Test2', value: '0,5%' },
    { name: 'Test3', value: '20,5%' },
    { name: 'Test4', value: '7,90' },
    { name: 'Test5', value: '8.98' },
    { name: 'Test6', value: '10,09' },
    { name: 'Test7', value: '19.09' }
  ];

  onClose() {
    this.close.emit();
  }
}
