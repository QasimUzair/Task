import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  ismtch=false;
  multiuser = [];
  
  // @Inject(MAT_DIALOG_DATA)data:any
   constructor( public dialogRef: MatDialogRef<AddUserComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any){}
    
    localstgData= JSON.parse(localStorage.getItem('Users') as string);
    addModdata=JSON.parse(localStorage.getItem('Users') as string);
    addform = new FormGroup({
     name :new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,]),
      confirm: new FormControl('', [
        Validators.required,
      ]),
    }) 
    addData() {
      
      
      if(this.addform.valid){
        // if (this.addform.value.confirm === this.addform.value.password) {
        //   console.log("tek hy");
        //   let users = [];
        //   this.multiuser=Object.assign(this.multiuser, this.addform.value);
        //  if(localStorage.getItem('Users')){
        //     this.addform.value.email;
        //     users = JSON.parse(localStorage.getItem('Users') as string);  
        //     users.push(this.addform.value);
        //     //users = [{'this.multiuser', ...users}];
        //   }
        //   else{
        //       users = [this.addform.value];
        //       }
        
          
        if (  this.addform.value.confirm === this.addform.value.password) { 
        this.addModdata.push(this.addform.value);
        localStorage.setItem('Users',JSON.stringify(this.addModdata));
        //localStorage.setItem('token', JSON.stringify(this.uemail,this.upassword))  
        // localStorage.setItem('token', JSON.stringify("123"))
        this.ismtch=false;
        alert("Form Submitted"); 
        
        this.dialogRef.close(this.addModdata);
        
        
        
        // this.dialogRef.close('Pizza!'); 
        
          }            
       
        else {
            this.ismtch=true;
            
            
            }
        }
        else{
          alert("invalid data")
          
        }
        
        }
        
      }
 

     
