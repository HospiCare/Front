import { Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InfDashboardComponent } from './inf-dashboard/inf-dashboard.component';
import { CreateConsComponent } from './create-cons/create-cons.component';
import { SoinWindowComponent } from './soin-window/soin-window.component';
import { VoirConsComponent } from './voir-cons/voir-cons.component';
import { DPIListComponent } from './dpi/dpi-list/dpi-list.component';
import { CreateDpiComponent } from './create-dpi/create-dpi.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { labDashboardComponent } from './lab-dash/lab-dash.component';


 const  routeConfig: Routes = [
    {
        path:'creer-dpi',
        component : CreateDpiComponent,
        title:'dpi',
    },
    {
        path:'',
        component : LoginBoxComponent,
        title:'login page',
    },
    {
        path:'admin-page',
        component : AdminPageComponent,
        title: 'admin',

    },
    {
        path:'inf-dashboard',
        component:InfDashboardComponent,
        title:'dahsboard',
    },
    {
        path:'lab-dashboard',
        component:labDashboardComponent,
        title:'dahsboard',
    },

    {
        path:'create-cons',
        component:CreateConsComponent,
        

    },
    {
        path:'soin-window',
        component:SoinWindowComponent,

    },
    {path :'voir-cons',
        component: VoirConsComponent,

    },
    {

     path:'doctor-dash',
     component : DPIListComponent,


    },
    {
        path: 'patient-dpi/:nss',
        component: PatientDetailsComponent
      },
      


];
export default routeConfig;
