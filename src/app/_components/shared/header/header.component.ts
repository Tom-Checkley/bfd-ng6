import { Component, OnInit, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('slideInOut', [
  //     state('in', style({
  //       display: 'block',
  //       left: '0'
  //     })),
  //     state('out', style({
  //       left: '100%',
  //       display: 'none'
  //     })),
  //     transition('in => out', animate('400ms ease-in-out')),
  //     transition('out => in', animate('400ms ease-in-out'))
  //   ]),
  // ]
})
export class HeaderComponent implements OnInit {
  @Output() menuState: string;
  info: any;

  constructor() {}

  ngOnInit() {
    console.log(this.menuState);
    this.screenWidth(event);
  }

  toggleMenu() {
    this.menuState === 'in'
        ? this.menuState = 'out'
        : this.menuState = 'in';
  }

  screenWidth(event) {
    if (event) {
      if (event.target.innerWidth >= 1024) {
        this.menuState = 'in';
      } else {
        this.menuState = 'out';
      }
    } else {
      if (window.innerWidth >= 1024) {
        this.menuState = 'in';
      } else {
        this.menuState = 'out';
      }
    }
  }

}
