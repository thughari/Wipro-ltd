import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UtilityComponent } from './utility/utility.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeamComponent } from './team/team.component';

//defining a route for navigation between components
const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'calculator',component:UtilityComponent},
  { path:'contact',component:ContactComponent},
  { path:'employee',component:EmployeeComponent},
  { path:'team',component:TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
