import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginBoxComponent } from "./login-box/login-box.component";
import { DPI } from './dpi';
import { Consultation } from './consultation';
import { state } from '@angular/animations';
import { LoginRoutingService } from './login-routing.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLogin: boolean = false;
  userRole: string = '';
  currentRoute: string = '';
  title = 'RiscoFront';
  loginroute : LoginRoutingService = inject(LoginRoutingService);
  constructor(private router: Router) {}
  
  choice?:number = undefined;
  consultions? : Consultation[] = undefined;
  DPI1? : DPI[] = undefined;
  patientdpi? : DPI = undefined;
 userName? : string = undefined;
  handleLoginSuccess(event: {username : string , role : number , Data : DPI | DPI[] | Consultation[]}) {
    this.userName = event.username;
    this.choice = event.role;
    switch(this.choice){
      case 0 :
      this.patientdpi = event.Data as DPI    //patient
      this.userRole = 'Patient'
      this.loginroute.setData(this.patientdpi);
      this.router.navigate(['patient-dpi/:nss' , this.patientdpi]);
      break;
     case 1 :                                     
this.consultions = event.Data as Consultation[]; // admin
this.userRole ='Admin'
this.router.navigate(['admin-page']);
      break;
     case 2 : 
this.consultions = event.Data as Consultation[] //loaboratin
this.userRole = 'Laboratien'
this.router.navigate(['patient-dpi/:nss']);
      break;
     case 3 : 
this.consultions = event.Data as Consultation[] //radiologue
this.userRole = 'Radiologue'
this.router.navigate(['patient-dpi/:nss']);
      break;
     case 4 : 
this.consultions = event.Data as Consultation[] //infermier
this.userRole = 'infermier'
this.loginroute.setData(this.consultions);
this.router.navigate(['inf-dashboard',this.consultions]);
      break;
      case 5 :
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
