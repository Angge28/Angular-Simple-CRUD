import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blogItem: Blog | undefined
  @Output() actionEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // deleteCardAction = (actionType: string, id: any) => {
  //   this.actionEmitter.emit({type: actionType, id})

  deleteCard = (id: any) => {
    this.actionEmitter.emit(id)
  }  
}
                      
