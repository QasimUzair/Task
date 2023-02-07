import { ApiAddComponent } from './../api-add/api-add.component';
import { ApiEditDailogComponent } from './../api-edit-dailog/api-edit-dailog.component';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { AddUserComponent } from './../add-user/add-user.component';
import { DailogComponent } from './../dailog/dailog.component';
import { AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';


@Component({  
  selector: 'app-http-task',
  templateUrl: './http-task.component.html',
  styleUrls: ['./http-task.component.css']
})
export class HttpTaskComponent {
  posts:any;
  displayedColumns: string[] = ['id', 'title', 'action'];
  dataSource= new MatTableDataSource();
  data:any;
  tempdata:null;
  length = 0;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild("MatSort") sort: MatSort;
  ngOnInit() {
    
    // this.posts = new this.posts(this.service);
      this.service.getPosts()
        .subscribe((response:any) => {
          this.posts = response;
          this.data=response;
          this.dataSource.data = response;

        });
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }
  constructor(private service:ApiServiceService,public dialog: MatDialog) {
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
    } 
    }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(name: any, index: any): void {
    const dialogRef = this.dialog.open(ApiEditDailogComponent, {
      data: { name },
 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      this.dataSource.data = result;
    });
  }
  deleteUser(user: any) {
   
    for (const index in this.data) {

      if (user.id == this.data[index].id) {
       
      this.data.splice(index, 1)
         //  console.log(this.data);
         this.dataSource.data = this.data;
        this.service.dataAfterDeleted(this.data);
        // localStorage.setItem('Users', JSON.stringify(this.data));
        
      }
     
    }
    this.dataSource.data = this.data;

  }
  addDailog() {
    const dialogRef = this.dialog.open(ApiAddComponent, {
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.tempdata = result;
      if(this.tempdata!="undefined"   )
        {
          if( this.tempdata!=null)
          {
            if(this.tempdata!=undefined)
            {
                
                this.data=this.tempdata;
                this.dataSource = this.tempdata;
          }
        }
        }  
        else {
         
         alert("Invalid")
          
        }

    }
    );

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });

  }
 

}


 