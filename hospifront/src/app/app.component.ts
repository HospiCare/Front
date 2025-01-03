import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginBoxComponent } from "./login-box/login-box.component";
import { DPI } from './dpi';
import { Consultation } from './consultation';
import { state } from '@angular/animations';
import { LoginRoutingService } from './login-routing.service';
import { CreateDpiComponent } from './create-dpi/create-dpi.component';
import { apiClient } from './apiService/Client';
import { DPIListComponent } from './dpi/dpi-list/dpi-list.component';
import { labDashboardComponent } from './lab-dash/lab-dash.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginBoxComponent,CreateDpiComponent,DPIListComponent,labDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLogin: boolean = false;
  userRole: string = '';
  currentRoute: string = '';
  title = 'RiscoFront';
  loginroute : LoginRoutingService = inject(LoginRoutingService);
  constructor(private router: Router) {
    this.isLogin = apiClient.isLoggedIn();
    if (this.isLogin) {
      const user = apiClient.user_data;
      const username = `${user.first_name} ${user.last_name}`;
      const role = user.user_type;
      // TODO: fix Data
      const Data = {} as DPI;
      this.handleLoginSuccess({username, role, Data})
    }

  }

  choice?:number = undefined;
  consultions? : Consultation[] = undefined;
  DPI1? : DPI[] = undefined;
  patientdpi? : DPI = undefined;
 userName? : string = undefined;
 handleLoginSuccess(event: {username : string , role : string , Data : DPI | DPI[] | Consultation[]}) {
    this.userName = event.username;
    switch(event.role){
      case 'patient' :
      this.patientdpi = event.Data as DPI    //patient
      this.userRole = 'Patient'
      this.loginroute.setData(this.patientdpi);
      this.router.navigate(['patient-dpi/:nss' , this.patientdpi]);
      break;
    case 'superuser' :
        this.consultions = event.Data as Consultation[]; // superuser
        this.userRole ='superuser'
        this.router.navigate(['admin-page']);
      break;
      case 'admin' :
this.consultions = event.Data as Consultation[]; // admin
this.userRole ='Admin'
this.router.navigate(['admin-page']);
      break;
      case 'laborantian' :
this.consultions = event.Data as Consultation[] //loaboratin
this.userRole = 'Laboratien'
this.router.navigate(['patient-dpi/:nss']);
      break;
      case 'radiologue' :
this.consultions = event.Data as Consultation[] //radiologue
this.userRole = 'Radiologue'
this.router.navigate(['patient-dpi/:nss']);
      break;
      case 'infirmier' :
this.consultions = event.Data as Consultation[] //infermier
this.userRole = 'infermier'
this.loginroute.setData(this.consultions);
this.router.navigate(['inf-dashboard',this.consultions]);
      break;
      case 'medecin' :
        this.DPI1 = event.Data as DPI[];     //doctor
        this.userRole = 'Docteur'
        this.router.navigate(['doctor-dash']);
        this.loginroute.setData(this.DPI1);
        this.loginroute.setIsDocteur();
        console.log(this.DPI1);
          break;
    }

    // Set initial route based on role
    this.isLogin = true;

  }
}
