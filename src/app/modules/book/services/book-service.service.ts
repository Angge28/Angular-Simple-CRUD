import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  constructor() { }

  book: Book[] = [
    {
      id: 1,
      name: "Angular tutorials",
      authors: [
        "Seiji",
        "Villafranca"
      ],
      isbn: 123456789

    },
    {
      id: 2,
      name: "Java Tutorials",
      authors: [
        "Lawrence",
        "Decamora"
      ],
      isbn: 7482736286

    },
    {
      id: 3,
      name: "Database Tutorials",
      authors: [
        "Jayson",
        "Cornello"
      ],
      isbn: 987654321
    },
   
  ];

  getBooks = () => {
    return this.book;
  }
  setBook = (bookD: Book) => {
    this.book.push(bookD)
  }

  editBook = (bookD: Book) => {
   for(let data in this.book) {
    if(this.book[data].id === bookD.id){
      this.book[data] = bookD
    }
   }
  }

  delete(id: number){
    this.book = this.book.filter((data)=> data.id !== id)
  }
  deleteAll = () => {
    this.book = [];
  }
}
