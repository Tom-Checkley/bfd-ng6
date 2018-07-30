import { Component, OnInit, Output } from '@angular/core';
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
  @Output() menuState = 'out';
  info: any;

  constructor() {}

  ngOnInit() {
    console.log(this.menuState);
  }

  toggleMenu() {
    this.menuState === 'in' ? this.menuState = 'out' : this.menuState = 'in';
  }

}
