import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        // display: 'block',
        left: '0'
      })),
      state('out', style({
        left: '100%',
        // display: 'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NavComponent implements OnInit, OnChanges {
  @Input() menuState: string;
  smallScreen;

  constructor() { }

  ngOnInit() {
    // this.screenWidth();
    this.toggleMenu(this.menuState);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.menuState);
    this.toggleMenu(changes.menuState.currentValue);
  }

  // screenWidth() {
  //   if (window.innerWidth >= 800) {
  //     this.menuState = 'in';
  //     this.smallScreen = false;
  //   } else {
  //     this.menuState = 'out';
  //     this.smallScreen = true;
  //   }
  // }

  toggleMenu(menuState) {
    // console.log(this.menuState, menuState);
    if (window.innerWidth <= 800) {
      this.menuState === 'out'
                    ? this.menuState = 'in'
                    : this.menuState = 'out';
    }
  }

}
