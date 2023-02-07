import { ApiServiceService } from './../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-api-add',
  templateUrl: './api-add.component.html',
  styleUrls: ['./api-add.component.css']
})
export class ApiAddComponent {
  multiuser = [];
  localstgData:any;
  addModdata:any;
  // @Inject(MAT_DIALOG_DATA)data:any
   constructor(private service :ApiServiceService , private http: HttpClient,public dialogRef: MatDialogRef<AddUserComponent>,
  
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.service.getPosts()
    .subscribe((res) => {
            this. localstgData=res
            this.addModdata=res
          }, (err) => {
          })
   }
    OnInit(){
      
    }
  //  constructor(private http: HttpClient) {

  //   this.http.get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((res) => {
  //       this.post=JSON.stringify(res);
  //     }, (err) => {
  //     })

  // }

   
   
    apiAddform = new FormGroup({
     
      id :new FormControl('', [
        Validators.required,
      ]),
      userid: new FormControl('', [
        Validators.required,
      ]),
      title: new FormControl('', [
        Validators.required,
      ]),
      body: new FormControl('', [
        Validators.required,
      ]),


      
    }) 
    addData() {
      
      
      if(this.apiAddform.valid){
        
        
         
        this.addModdata.push(this.apiAddform.value);
        //localStorage.setItem('token', JSON.stringify(this.uemail,this.upassword))  
        // localStorage.setItem('token', JSON.stringify("123"))
        alert("Form Submitted"); 
        
        this.dialogRef.close(this.addModdata);
        
        // this.dialogRef.close('Pizza!'); 
        
          }            
       
        
        }
       
        
      
}
