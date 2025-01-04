import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  template: `
    @if (iftrue) {
      <button (click)="turnToElse()">turnToElse</button>
      <p> you are in if </p>

    }@else {
      <button (click)="turnToIf()">turnToIf</button>
      <p> you are in else </p>

    }

  `,
  styleUrl: './test.component.css'
})
export class TestComponent {
turnToIf() {
  this.iftrue = true;
}
  iftrue = true;
turnToElse() {
  this.iftrue = false;
}


}
