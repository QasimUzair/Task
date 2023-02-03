import { DailogComponent } from './dailog/dailog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggComponent } from './logg/logg.component';
import { SignComponent } from './sign/sign.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
// import { UsernameValidators } from './username.validators';
import { Form } from '@angular/forms';
import { map } from 'rxjs/operators'
import {MatCardModule} from '@angular/material/card';
import { MainComponent } from './main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatDialogModule,MatDialogRef,MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { MatSortModule } from '@angular/material/sort';








@NgModule({
  declarations: [
    AppComponent,
    LoggComponent,
    SignComponent,
    LoginComponent,
    SignupComponent,
    MainComponent,
    NavBarComponent,
    SideBarComponent,
    MainContentComponent,
    DailogComponent,
    AddUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
   
    

 
  
    
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
