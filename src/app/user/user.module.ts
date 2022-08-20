import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import {FormComponent} from './components/form/form.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import { MaterialExampleModule } from '../material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MaterialExampleModule,
    MatInputModule,
    MatButtonModule
    ],
    
})
export class UserModule { }
