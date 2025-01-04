import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  template: `
    <div id="container">
      <div class="button" (click)="navigateTo('doctor-dash')">
        <img src="./assets/bill.png" alt="bill icon">
        <p class="title"> demandes de facture </p>
      </div>
      <div class="button grey" (click)="navigateTo('create-dpi')">
        <img src="./assets/addFolder.png" alt="add folder icon">
        <p class="title"> creer DPI </p>
      </div>
    </div>
  `,
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
