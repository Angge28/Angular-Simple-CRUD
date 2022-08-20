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

  constructor() { }

  ngOnInit(): void {
  }

  // cardAction = (actionType: string, id: any) => {
  //   this.actionEmitter.emit({type: actionType, id})
  // }
  deleteAction = (id: any) => {
    this.actionEmitter.emit( id)
  }

}
