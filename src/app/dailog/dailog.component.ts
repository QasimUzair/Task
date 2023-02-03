import { Component } from '@angular/core';
import { OnInit, InjectionToken } from '@angular/core';
import { Inject } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent {
  [x: string]: any;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // matcher = new ErrorStateMatcher();
  // name = new FormControl('', [Validators.required]);
  localstgData= JSON.parse(localStorage.getItem('Users') as string);
  edform = new FormGroup({
   name :new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  })
  data: any;
  username: any;
  useremail: any;
  hide = true;
  currentItem: any;

  ngOnInit() {
  }
  constructor(public dialogRef: MatDialogRef<DailogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
    this.username = data.name.name;
    this.useremail = data.name.email;
  } 
  editData() {    
      if(this.edform.valid){
      let tempname=this.edform.value.name;
        let tempemail=this.edform.value.email;   
      this.data.name.name=tempname;
      this.data.name.email=tempemail; 
      for (const index in this.localstgData) {
        if (this.localstgData[index].email==this.useremail) { 
          this.localstgData[index].email=tempemail;
          this.localstgData[index].name=tempname;
          this.dialogRef.close();
          localStorage.setItem('Users',JSON.stringify(this.localstgData));  
          
        }  
       }
      }
      else{
      alert("Invalid")
      }
    }

    

}
