import { AddUserComponent } from './../add-user/add-user.component';
import { DailogComponent } from './../dailog/dailog.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
export interface UserData {
  name: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent  {
  id = 0;
  data = JSON.parse(localStorage.getItem('Users') as string);
  x = JSON.parse(localStorage.getItem('Users') as string);
  tempdata:null;
  displayedColumns: string[] = ['name', 'email', 'password',];
  dataSource: MatTableDataSource<any>;
 
  length = 0;

   
  //@ViewChild(MatPaginator) paginator:MatPaginator;
  // @ViewChild("MatPaginator") paginator: MatPaginator;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild("MatSort") sort: MatSort;
  // ,public dialogRef: MatDialogRef<AddUserComponent>
  constructor(public dialog: MatDialog ) {

    // Assign the data to the data source for the table to render
    // this.dataSource = (this.data);
    this.dataSource = new MatTableDataSource(this.data);
    
    
  }
  openDialog(name: any, index: any): void {
    const dialogRef = this.dialog.open(DailogComponent, {
      data: { name },
 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      
      // localStorage.setItem('Users', JSON.stringify(this.data));
    });

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  ngOnInit(): void {
    this.length = this.data.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 
  }
  addDailog() {
    // this.dialog.open(AddUserComponent)
    // localStorage.setItem('Users', JSON.stringify(this.data));
    const dialogRef = this.dialog.open(AddUserComponent, {
      
    });
    dialogRef.afterClosed().subscribe(result => {
      this.tempdata = result;
      if(this.tempdata!="undefined"   )
        {
          if( this.tempdata!=null)
          {
            if(this.tempdata!=undefined)
            {
                
                localStorage.setItem('Users', JSON.stringify(this.tempdata));
                this.dataSource = JSON.parse(localStorage.getItem('Users') as string)
          }
        }
        }  
        else {
         
          console.log("Invalid");
          
        }
    }
    );

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });

  }
  
  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
  } 
  }
  deleteUser(user: any) {
    
    for (const index in this.data) {

      // if (this.localstgData[index].email==user.email) {
      
      if (user.email == this.data[index].email) {
       this.data.splice(index, 1)
        localStorage.setItem('Users', JSON.stringify(this.data));
        this.dataSource = JSON.parse(localStorage.getItem('Users') as string)
        
      }
     
    }
  }
}
 // this.localstgData[index]
      // localStorage.removeItem("user.email");
      // fetch value for corresponding key 
      // localStorage.removeItem(index);
      // localStorage.setItem('Users',JSON.stringify(this.localstgData));
/** Builds and returns a new User. */
//  function createNewUser(id: number): UserData {
//    const name =
//      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//      ' ' +
//      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//      '.';
//    return {
//      id: id.toString(),
//      name: name,
//      email: email,
//      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//    };
// }



