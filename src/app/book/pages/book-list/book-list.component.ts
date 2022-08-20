import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subscription } from 'rxjs';
import { Book } from '../../models/book';
import {BookServiceService} from '../../services/book-service.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  subs: Subscription | undefined

  constructor(private bookService: BookServiceService, private router: Router) { 
    //this.books = this.bookService.getBooks();
    this.subs = this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }

  action(id: number){
    // this.bookService.delete(id)
    // this.books = this.bookService.getBooks();
    forkJoin([this.bookService.delete(id), this.bookService.getBooks()]).pipe(
      map(([a , b]) => {
        this.books = b
      })).subscribe()
  }
  // sample(){
  //   this.router.navigate(['/form', 2])
  // }

  deleteAll = () => {
    // this.bookService.deleteAll();
    // this.books = this.bookService.getBooks();
    for(let data of this.books) {
      this.action(data.id)
    }
  }

}
