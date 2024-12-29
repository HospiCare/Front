import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container-page',
  imports: [RouterModule],
  template: `
  <header class="container">
    <div class="item">
      <img src="./assets/logo.png" alt="logo">
    </div>
    <div class="item " id="navbar">
      <img id="logout" src="./assets/logout.png" alt="logout icon">
      <img id="parameter" src="./assets/parameter.png" alt="parameter icon">
      <div style="margin-left: 50px;">
       <p id="username">hmida hmouda </p>
       <p id="role">admin</p>
       </div>
      <a routerLink="admin-page"> <img id="avatar" src="./assets/avatar.jpg" alt="avatar" > </a>
    </div>
  </header>
  <body class="content">
  <router-outlet></router-outlet>
  </body>
  `,
  styleUrl: './container-page.component.css'
})
export class ContainerPageComponent implements OnInit {
  ngOnInit(): void {
    alert('hello');
  }
  

}
