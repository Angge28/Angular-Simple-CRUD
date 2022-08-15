import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
 @Input() bookItem: Book | undefined;
 @Output() actionEmitter = new EventEmitter();
 panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  // cardAction = (actionType: string, id: any) => {
  //   this.actionEmitter.emit({type: actionType, id})
  // }
  deleteCard = (id: any) => {
    this.actionEmitter.emit( id)
  }

  editBook = (id: number) => {
    console.log(id)
  }
}
