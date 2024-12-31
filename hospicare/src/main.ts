import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread existing app configuration
  providers: [
    ...appConfig.providers || [], // Include any existing providers from appConfig
    provideRouter(routes), // Add routing providers
  ],
}).catch((err) => console.error(err));