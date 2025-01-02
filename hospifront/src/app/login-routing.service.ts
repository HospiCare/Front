import { Injectable } from '@angular/core';
import { DPI } from './dpi';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class LoginRoutingService {
  Data? : DPI | DPI[] | Consultation[];
  isDocteur : boolean = false; 
  

  setIsDocteur() {
    this.isDocteur = true;
  }
  IsDocteur(){
    return this.isDocteur;
  }

  setData( Data: DPI | DPI[] | Consultation[] ){
    this.Data = Data
  }
  getDAta(){
    return this.Data
  }

  constructor() { }
  
}
