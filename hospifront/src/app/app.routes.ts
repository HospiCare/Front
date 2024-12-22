import { Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { HelpComponent } from './help/help.component';

export const routes: Routes = [
    {
        path:'',
        component : LoginBoxComponent,
        title:'login page',
    },
    {
        path:'help',
        component : HelpComponent,
        title : 'Help page',
    }
];
