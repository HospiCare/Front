import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, FooterComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospicare';
}