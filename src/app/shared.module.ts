import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';
//import { ProfileComponent } from './modules/user/pages/profile/profile.component';


@NgModule({
  declarations: [
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    CommandBarComponent
  ]
})
export class SharedModule { }
