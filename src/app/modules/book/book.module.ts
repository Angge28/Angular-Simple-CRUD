import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookRoutingModule } from './book-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookItemComponent,
    BookFormComponent,

  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ]
})
export class BookModule { }
