import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FormComponent } from './components/form/form.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path: "",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
