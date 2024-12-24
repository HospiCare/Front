import { Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { HelpComponent } from './help/help.component';
import { AccountPreviewComponent } from './account-preview/account-preview.component';

 const  routeConfig: Routes = [
    {
        path:'',
        component : LoginBoxComponent,
        title:'login page',
    },
    {
        path:'help',
        component : HelpComponent,
        title : 'Help page',
    },
    {
    path:'account-info',
    component : AccountPreviewComponent,
    title : 'UserInfo'
    }
    
];
export default routeConfig;
