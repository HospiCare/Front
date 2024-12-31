import { Component } from '@angular/core';
import { FooterComponent } from "../components/footer/footer.component";
import { RoleComponent } from "../components/role/role.component";
import { MissionComponent } from "../components/mission/mission.component";
import { AboutUsComponent } from "../components/about-us/about-us.component";
import { HeroComponent } from "../components/hero/hero.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  imports: [FooterComponent, RoleComponent, MissionComponent, AboutUsComponent, HeroComponent, NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
