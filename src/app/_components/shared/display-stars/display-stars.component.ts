import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-stars',
  templateUrl: './display-stars.component.html',
  styleUrls: ['./display-stars.component.scss']
})
export class DisplayStarsComponent implements OnInit {

  @Input() stars;
  @Input() outOf;

  // stars = stars;

  percentage = (this.stars / this.outOf * 100) + '%';

  // percentage: string;

  constructor() {

  }

  ngOnInit() {
  }

}
