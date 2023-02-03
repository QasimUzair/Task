
import { AbstractControl, Validators } from '@angular/forms';
import {ValidationErrors} from '@angular/forms'
import { zipAll } from 'rxjs';

export class UsernameValidators {

     //	var zzz=localStorage.getItem('token');

   static shouldBeUni(control: AbstractControl):ValidationErrors| null{
      let res1 = localStorage.getItem('Users');
      // typeof res1 != "undefined"
         if( res1!=null  )
         {
            
            let user= JSON.parse(localStorage.getItem('Users') as string);
            let j=user.length;
            
            for(let i=0;i<j ;i++)
            {
               
               if((control.value ==user[i].email))
                  {
                     return {shouldBeUnique : true};  
                  }
            }
         }
         else {
            console.log("else statement!")
            return null;
         }
  
    return null;
   }
   static mustBe(control: AbstractControl):ValidationErrors| null{
    let res2=(localStorage.getItem('Users') as string);
    if( res2!=null )
    {
      let user= JSON.parse(localStorage.getItem('Users') as string);
    let j=user.length;
    for(let i=0;i<j ;i++)
     {
        
        if((control.value !=user[i].email))
         {
            return {shouldBeUnique : true};  

        }
     }

   }
    return  null;
    }

}
