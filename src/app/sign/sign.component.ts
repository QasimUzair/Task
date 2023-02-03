import { Component } from '@angular/core';
import { Validators,FormGroup,FormControl,ValidationErrors } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent {

  
   
    person= ({
   
    fname: "",
    lname: "",
     mail: "",
      pwd: "",

    });


  formm=new FormGroup({
    firstname:new FormControl('',[
      Validators.required,

    ]),
    lastname:new FormControl('',[
      Validators.required,

    ]),
    username:new FormControl('',[
      Validators.required,
      Validators.email,

    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8)

    ]),
  })
  get username(){
    return this.formm.get('username');
  }
  get firstname(){
    return this.formm.get('firstname');
  }
  get lastname(){
    return this.formm.get('lastname');
  }
  get password(){
    return this.formm.get('password');
  }
  Signup(){
    console.log(this.formm.value)
    // this.person.fname=this.formm.value.firstname; 
    // this.person.lname=this.formm.value.lastname; 
    // this.mail=this.formm.value.username;
    // this.pwd=this.formm.value.password;
    
    // localStorage.setItem("token",this.person)

    
   
  }
  


}
