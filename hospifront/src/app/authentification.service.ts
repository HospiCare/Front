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
  getAnswer(  answer :boolean,  username : string , role : number , Data : DPI | DPI[] | Consultation[] ) : boolean| {answer: boolean ,username : string , role : number , Data : DPI | DPI[] | Consultation[]} {
    

    if(answer){
      
      switch(role){
        
        case 0:
         return  { answer:true , username , role:0 , Data}
        //this is a patient
       
        case 1:
         return  { answer:true , username , role:1 , Data }
          //this is a admin
         
          case 2:
            
         return  { answer:true , username , role:2 , Data}
            //this is a laboratin
           
            case 3:
              
         return  { answer:true , username , role:3 , Data}
              //this a radiologue
          
              case 4:
                
         return  { answer:true , username , role:4 , Data}
         //this is an infermier
              case 5:
                
         return  { answer:true , username , role:5 , Data}
                //this is a doctor
            
                default:
         return  false;
                
      }

    }else{
      return false
    }
    
  }
}
