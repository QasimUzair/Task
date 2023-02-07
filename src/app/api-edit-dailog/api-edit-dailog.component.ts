import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-api-edit-dailog',
  templateUrl: './api-edit-dailog.component.html',
  styleUrls: ['./api-edit-dailog.component.css']
})
export class ApiEditDailogComponent {
  [x: string]: any;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // matcher = new ErrorStateMatcher();
  // name = new FormControl('', [Validators.required]);
  localstgData:any;
  apiform = new FormGroup({
   id :new FormControl('', [
      Validators.required,
    ]),
    title: new FormControl('', [
      Validators.required,
    ]),
  })
  data: any;
  hide = true;
  currentItem: any;
  id:any;
  title:any;

  ngOnInit() {
  }
  constructor(private http: HttpClient,public dialogRef: MatDialogRef<DailogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.data = data;
    // console.log(this.data.name.title);
    
    this.id = data.name.id;
    this.title = data.name.title;
    // console.log(this.title);
    
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.localstgData=res;
      }, (err) => {
      })
  } 
 
  editData() {    
    // console.log(this.localstgData);
    // console.log(this.data);
    
      if(this.apiform.valid){
      let tempid=this.apiform.value.id;
        let temptitle=this.apiform.value.title;   
      // this.data.name.id=tempid;
      // console.log(this.data);
      // console.log(this.data);
      
      
      // this.data.name.title=temptitle; 
      for (const index in this.localstgData) {
        if (this.localstgData[index].id==this.id) { 
          // console.log("Inner condition");
          this.localstgData[index].id=tempid;
          this.localstgData[index].title=temptitle;
          this.dialogRef.close(this.localstgData);
          // localStorage.setItem('Users',JSON.stringify(this.localstgData));  
          // localStorage.setItem('Users',JSON.stringify(this.localstgData));  
          
        }  
       }
      }
      else{
      alert("Invalid")
      }
    }

    

}
