import { Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { ContainerPageComponent } from './container-page/container-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InfDashboardComponent } from './inf-dashboard/inf-dashboard.component';
import { CreateConsComponent } from './create-cons/create-cons.component';
import { SoinWindowComponent } from './soin-window/soin-window.component';
import { VoirConsComponent } from './voir-cons/voir-cons.component';
import { DPIListComponent } from './dpi-list/dpi-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


 const  routeConfig: Routes = [
    {
        path:'',
        component : ContainerPageComponent,

    },
    {
        path:'login',
        component : LoginBoxComponent,
        title:'login page',
    },
    {
        path:'admin-page',
        component : AdminPageComponent,
        title: 'creer dpi',

    },
    {
        path:'inf-dashboard',
        component:InfDashboardComponent,
        title:'dahsboard',
    },
    {
        path:'create-cons',
        component:CreateConsComponent,
        title:'cons'

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
