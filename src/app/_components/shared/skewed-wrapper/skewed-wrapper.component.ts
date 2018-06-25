import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skewed-wrapper',
  templateUrl: './skewed-wrapper.component.html',
  styleUrls: ['./skewed-wrapper.component.scss']
})
export class SkewedWrapperComponent implements OnInit {
  @Input() full: boolean;

  constructor() { }

  ngOnInit() {
  }

}
