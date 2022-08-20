import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnDestroy {

  updatedBook: Subscription | undefined
  bookItems: Book[] = [];
  bookFormGroup: FormGroup;
  authorsFormArray: FormArray;
  bookId: any;
  private router: Router | undefined;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookServiceService) {
    this.route.paramMap.subscribe( paramMap => {
      this.bookId = paramMap.get('id');
    })
   
    this.bookFormGroup = this.fb.group({
      id: [],
      name: [''],
      isbn: [''],
      authors: this.fb.array([])
    });
   this.authorsFormArray = this.bookFormGroup.get('authors') as FormArray

   this.updatedBook = this.bookService.getEditBooks(parseInt(this.bookId)).subscribe(data => {
    this.bookFormGroup = this.fb.group({
      id: [data[0].id],
      name: [data[0].name],
      isbn: [data[0].isbn],
      authors: this.fb.array([])
    });
    this.authorsFormArray = this.bookFormGroup.get('authors') as FormArray
    for(let authorsData of data[0].authors){
      this.authorsFormArray.push(new FormControl(authorsData))
    }
    
  }) 
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.updatedBook!.unsubscribe()
}

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl(''));
  }
  
  deleteAuthor = (index: number) => {
    this.authorsFormArray.removeAt(index)
  }

  saveInfo = () => {
    // const bookD = this.bookFormGroup.getRawValue() as Book
    // if(this.parameterId === 'false'){
    //   return this.books.setBooks(bookD)
    // }
    // return this.books.editBooks(bookD)
    console.log(this.bookFormGroup?.value)
    let bookD = this.bookFormGroup.getRawValue() as Book 
    if (this.bookId && bookD.id !== null)
       this.bookService.editBooks(bookD).subscribe()
    else
       this.bookService.setBooks(bookD).subscribe() 

    this.router?.navigate(['/books'])
  }
}
