import { AuthService } from './../shared/auth.service';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Validators,FormControl,ValidationErrors } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { UsernameValidators } from '../username.validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(public router: Router,public func:AuthService){}
  logincheck=0;
  data:any;
  email:any;
  password:any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 matcher = new ErrorStateMatcher();
  passwordFormControl = new FormControl('', [Validators.required]);

  hide = true;



  get(emaill:any,pass:any){
    let user= JSON.parse(localStorage.getItem('Users') as string);
    let j=user.length;
   let res=0;
     for(let i=0;i<j ;i++)
     {
        
              if(emaill ===user[i].email  && pass===user[i].password)
              {
                  
                res++;
                  
                  break;

              }
              
      }
      if(res==1){
         console.log("Login ");
         this.logincheck++;
        
        this.func.checked(this.logincheck)
         this.router.navigate(['/main']);

      
    }
    else{
      alert("Incorrect Email or Password")

    }

    //   }
      // if (this.emailFormControl.value === this.email &&  this.passwordFormControl.value ===this.password ){
      //   alert("submitted")
      // }
      // 

  
  }
}





// form =new FormGroup({
//   email:new FormControl('',[
//     Validators.required,
//     Validators.email

//   ]),
//   password:new FormControl('',[
//     Validators.required,
//     Validators.minLength(8),
//   ])


//   })
//   get username(){
//     return this.form.get('username');
//   }
//   get password(){
//     return this.form.get('password');
//   }
//   onSubmit(){
//     console.log(this.form.value)
//   }
//   get firstname(){
//     return this.form.get('firstname');
//   }
//   get lastname(){
//     return this.form.get('lastname');
//   }
//   login(){
//     this.form.setErrors({
//       invalidLogin : true
//     }) ; 
//   }


