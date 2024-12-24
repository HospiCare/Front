import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { MissionComponent } from "./components/mission/mission.component";
import { RoleComponent } from "./role/role.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, FooterComponent, AboutUsComponent, MissionComponent, RoleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospicare';
}