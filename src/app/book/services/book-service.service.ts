import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  constructor(private http: HttpClient) { }

  // getBooks = () => {
  //   return this.book;
  // }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.url}/books`).pipe(tap((book: Book[]) => {
      return book;
    }));
  }

  // setBook = (bookD: Book) => {
  //   this.book.push(bookD)
  // }
  setBooks = (bookD: Book) => {
    return this.http.post<Book>(`${environment.url}/books`, bookD).pipe(
      tap(bd => bd)
    )
  }  

  // editBook = (bookD: Book) => {
  //  for(let data in this.book) {
  //   if(this.book[data].id === bookD.id){
  //     this.book[data] = bookD
  //   }
  //  }
  // }
  editBooks = (bookD: Book) => {
    return this.http.put<Book>(`${environment.url}/books/${bookD.id}`, bookD).pipe(
      tap( bd => bd)
    )
  }

  getEditBooks = (id: number) => {
    return this.http.get<Book[]>(`${environment.url}/books`).pipe(
      map((book: Book[]) => {
        return book.filter(b => b.id === id)      
      })
    )
  }

  // delete(id: number){
  //   this.book = this.book.filter((data)=> data.id !== id)
  // }
  delete = (id: number) => {
    return this.http.delete<Book>(`${environment.url}/books/${id}`).pipe(
      tap(b => b))
  }
  
  deleteAll = () => {
    // this.book = [];
    this.http.delete<Book>(`${environment.url}/books/`).pipe(tap(x => x))
  }

}
