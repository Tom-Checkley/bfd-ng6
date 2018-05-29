import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-display-stars',
  templateUrl: './display-stars.component.html',
  styleUrls: ['./display-stars.component.scss']
})
export class DisplayStarsComponent implements OnInit {

  @Input() stars;
  @Input() outOf;

  percentage = (this.stars / this.outOf * 100) + '%';

  constructor() {

  }

  ngOnInit() {
  }

}
