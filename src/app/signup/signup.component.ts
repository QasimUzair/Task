import { Component } from '@angular/core'
import { ErrorStateMatcher } from '@angular/material/core';
import { Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UsernameValidators } from '../username.validators';
import { UsernameValidators } from '../username.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // nameFormControl = new FormControl('', [Validators.required]);
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required]);

  // matcher = new ErrorStateMatcher();
  // hide = true;
  
 emp=0;
  hide = true;
  ismtch=false;
  multiuser = [];
   formail:string[] = [] ;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,

    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      UsernameValidators.shouldBeUni,


    ]),
    
    password: new FormControl('', [
      Validators.required,]),

    confirm: new FormControl('', [
      Validators.required,

    ]),
    

  })


  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get email() {
    return this.form.get('email');
  }
  get confirm() {
    return this.form.get('password');
  }


  
  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  isUni(){
    let s=this.form.value.email

  }

  Add() {

    if(this.form.valid){
      
      


       //this.localStorageContent =localStorage.getItem('usernames');
       
      

          // let usernames;
          // if(this.localStorageContent===null){
          //   usernames=[];
          // }
          // else{
          //   usernames=JSON.parse(this.localStorageContent);
          // }
          // usernames.push(this.form.value.email,this.form.value.password)
          // localStorage.setItem('token', JSON.stringify(usernames))  ;
          
        //  this.data = { email: this.form.value.email, password: this.form.value.password }
        // this.uemail.push("Qasim");
        // this.uemail.push("Qasim");
        // this.upassword.push(JSON.parse(this.form.value.password?));
      

    if (this.form.value.confirm === this.form.value.password) {  
      let users = [];
      
      
    
    
      this.multiuser=Object.assign(this.multiuser, this.form.value);
   
    
           let res1 = localStorage.getItem('Users');
      // typeof res1 != "undefined"
         if(res1 != "undefined")
         {
            
                if(localStorage.getItem('Users')){
                 
                this.form.value.email;
                  
                  users = JSON.parse(localStorage.getItem('Users') as string);  
                  users.push(this.form.value);

                  //users = [{'this.multiuser', ...users}];
                  
                }else{
                  
                 
                  users = [this.form.value];
                }
                localStorage.setItem('Users',JSON.stringify(users));

                    //localStorage.setItem('token', JSON.stringify(this.uemail,this.upassword))  
                    // localStorage.setItem('token', JSON.stringify("123"))
                    
                  this.ismtch=false;
                  alert("Form Submitted");
              
              
                  
            
    
    
    
    }
    else {
        this.ismtch=true;
      }

    }
  }
  }

}





