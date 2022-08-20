import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    SharedModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [FormBuilder]
})
export class BlogModule { }
