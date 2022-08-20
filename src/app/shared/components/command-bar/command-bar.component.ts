import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  // @Input() blogItem: Blog | undefined
  // @Output() action1Emitter = new EventEmitter();
  
  // @Input() bookItem: Book | undefined;
  // @Output() action2Emitter = new EventEmitter();

  routeSample =""
  name = 'Get Current Url Route Demo';
  @Output () deleteAllEmitter = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sample = () =>{
    var string: string[] =  this.router.url.split('/')
    return string[1];
  }

  deleteAll = () => {
    this.deleteAllEmitter.emit();
  }
}
