import { Component } from '@angular/core';
import { Validators,FormGroup,FormControl,ValidationErrors } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-logg',
  templateUrl: './logg.component.html',
  styleUrls: ['./logg.component.css']
})

export class LoggComponent {
  showPassword = false;
  form123=new FormGroup ({
    username:new FormControl('',[
      Validators.required,
      Validators.email
     
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
  
  })
  get username(){
    return this.form123.get('username');
  }
  get password(){
    return this.form123.get('password');
  }
  onSubmit(){
    console.log(this.form123.value)
  }
  get firstname(){
    return this.form123.get('firstname');
  }
  get lastname(){
    return this.form123.get('lastname');
  }
  login(){
    this.form123.setErrors({
      invalidLogin : true
    }) ; 
  }
 
}
