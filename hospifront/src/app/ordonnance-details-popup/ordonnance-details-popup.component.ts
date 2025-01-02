import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ordonnance } from '../ordonnance';

@Component({
  selector: 'app-ordonnance-details-popup',
  templateUrl: './ordonnance-details-popup.component.html',
  styleUrls: ['./ordonnance-details-popup.component.css']
})
export class OrdonnanceDetailsPopupComponent {
  @Input() isVisible: boolean = false;
  @Input() ordonnance?: Ordonnance | null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
