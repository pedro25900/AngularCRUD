import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {DepartamentComponent} from './departament/departament.component';
import {ShowDepartamentComponent} from './departament/show-departament/show-departament.component';
import {AddEditDepartamentComponent} from './departament/add-edit-departament/add-edit-departament.component';
import {EmployeeComponent} from './employee/employee.component';
import {ShowEmployeeComponent} from './employee/show-employee/show-employee.component';
import {AddEditEmployeeComponent} from './employee/add-edit-employee/add-edit-employee.component';
import {ApiserviceService} from './apiservice.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DepartamentComponent,
    ShowDepartamentComponent,
    AddEditDepartamentComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
