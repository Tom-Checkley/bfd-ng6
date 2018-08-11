import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
// import {  } from 'events';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        display: 'block',
        left: '0'
      })),
      state('out', style({
        left: '100%',
        display: 'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavComponent implements OnInit {
  @Input() menuState: string;
  @Output() menuStateChange = new EventEmitter();
  smallScreen;


  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    if (window.innerWidth <= 1024) {
      this.menuState === 'out'
          ? this.menuState = 'in'
          : this.menuState = 'out';
      this.menuStateChange.emit(this.menuState);
    } else {
      this.menuState = 'in';
    }
  }

}
