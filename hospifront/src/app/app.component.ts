import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginBoxComponent } from "./login-box/login-box.component";
import { PatientDetailsComponent } from "./patient-details/patient-details.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { InfDashboardComponent } from "./inf-dashboard/inf-dashboard.component";
import { DPIListComponent } from "./dpi-list/dpi-list.component";
import { DPI } from './dpi';
import { Consultation } from './consultation';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginBoxComponent, PatientDetailsComponent, AdminPageComponent, InfDashboardComponent, DPIListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLogin: boolean = false;
  userRole: number = 0;
  currentRoute: string = '';
  title = 'RiscoFront';

  choice?:number = undefined;
  consultions? : Consultation[] = undefined;
  DPI? : DPI[] = undefined;
  patientdpi? : DPI = undefined;
 userName? : string = undefined;
  handleLoginSuccess(event: {username : string , role : number , Data : DPI | DPI[] | Consultation[]}) {
    this.userName = event.username;
    this.userRole = event.role;
    this.choice = event.role;
    switch(this.choice){
      case 0 :
      this.patientdpi = event.Data as DPI
      break;

      case 5 :
      this.DPI = event.Data as DPI[]
        break;

     default : 
this.consultions = event.Data as Consultation[]
      break;
    }
    
    
    // Set initial route based on role
    this.isLogin = true;

  }
}
