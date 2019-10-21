import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {ProjectComponent} from "./project/project.component";
import {ZdanieComponent} from "./zdanie/zdanie.component";
import {OfficeComponent} from "./office/office.component";



const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'project',component:ProjectComponent},
  {path:'zdanie',component:ZdanieComponent},
  {path:'office',component:OfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
