import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Ordonnance {
  name: string;
  status: string;
  medications?: Array<{
    name: string;
    dose: string;
    duration: string;
  }>;
}

@Component({
  selector: 'app-ordonnance-details-popup',
  templateUrl: './ordonnance-details-popup.component.html',
  styleUrls: ['./ordonnance-details-popup.component.css']
})
export class OrdonnanceDetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Input() ordonnance: Ordonnance | null = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
