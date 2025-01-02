import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DPIListComponent } from './dpi/dpi-list/dpi-list.component';

@NgModule({
  declarations: [
    DPIListComponent
  ],
  imports: [
    BrowserModule,  // BrowserModule inclut CommonModule
  ],
  providers: [],
  bootstrap: [DPIListComponent]  // On bootstrappe DPIListComponent directement
})
export class DPIModule { }
