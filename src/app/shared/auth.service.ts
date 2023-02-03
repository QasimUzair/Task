import { LoginComponent } from './../login/login.component';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  value=0;
  constructor() {
   }

   checked(data:any){
    this.value=data;
   }
  isLoggedIn(){

    let data = JSON.parse(localStorage.getItem('Users') as string);
    // let user=
    // if()
    // {

    // }


    // return !! localStorage.getItem('Users',)
    if(this.value!=0)
    {
      return true
    }
    return false


  }
}
