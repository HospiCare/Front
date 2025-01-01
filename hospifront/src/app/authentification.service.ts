import { Injectable } from '@angular/core';
import { UserAccount } from './user-account';
import { Patient } from './patient';
import { DPI } from './dpi';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  protected User : UserAccount = {
    firstname : '',
    lastname : '',
    gender : false,
    date_of_birthe : '',
    email : '',
    password : '',
    phone:'',
  }
 

  constructor() { }
  authentificationAtempt(username : UserAccount) {
    console.log(username.email);

  }
  getAnswer(  answer :boolean,  username : string , role : number , Data : Patient | DPI | Consultation[] ) : boolean| {answer: boolean ,username : string , role : string , Data : Patient | DPI | Consultation[] , route : string} {
    

    if(answer){
      
      switch(role){
        
        case 0:
         return  { answer:true , username , role:'patient' , Data , route:'patient-dpi/:nss'}
        //this is a patient
       
        case 1:
         return  { answer:true , username , role:'admin' , Data , route:'admin-page'}
          //this is a admin
         
          case 2:
            
         return  { answer:true , username , role:'laboratin' , Data,route:''}
            //this is a laboratin
           
            case 3:
              
         return  { answer:true , username , role:'radiologue' , Data,route:''}
              //this a radiologue
          
              case 4:
                
         return  { answer:true , username , role:'infermier' , Data,route:'inf-dashboard'}
         //this is an infermier
              case 5:
                
         return  { answer:true , username , role:'Doctor' , Data,route:'doctor-dash'}
                //this is a doctor
            
                default:
         return  false;
                
      }

    }else{
      return false
    }
    
  }
}
