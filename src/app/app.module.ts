///<reference path="../../node_modules/@angular/common/http/http.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { ServiceEmployee} from "./employee/ServiceEmployee";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServiceProject} from "./project/serviceProject";
import { OfficeComponent } from './office/office.component';
import { ZdanieComponent } from './zdanie/zdanie.component';
import {ServiceZdanie} from "./zdanie/serviceZdanie";
import {ServiceOffice} from "./office/serviceOffice";
import {
  MatButtonModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSortModule, MatTableModule
} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent,
    OfficeComponent,
    ZdanieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,BrowserAnimationsModule,
    MatTableModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatButtonModule,MatInputModule,MatIconModule,
    MatSortModule,
  ],
  providers: [ServiceEmployee,ServiceProject,ServiceZdanie,ServiceOffice],
  bootstrap: [AppComponent]
})
export class AppModule { }
