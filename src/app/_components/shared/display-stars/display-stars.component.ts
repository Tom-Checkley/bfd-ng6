import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-stars',
  templateUrl: './display-stars.component.html',
  styleUrls: ['./display-stars.component.scss']
})
export class DisplayStarsComponent implements OnInit {

  @Input() stars;
  @Input() outOf;

  constructor() {}

  ngOnInit() {
  }

}
