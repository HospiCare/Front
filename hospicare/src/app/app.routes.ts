import { Routes } from '@angular/router';
import { CreateDpiComponent } from './create-dpi/create-dpi.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const  routeConfig: Routes = [
    {
        path:'',
        component : LandingPageComponent,
        title:'landing page',

    },

    {

        path:'create-dpi',
        component : CreateDpiComponent,
        title:'create dpi',
    },
    
    
];
export default routeConfig;