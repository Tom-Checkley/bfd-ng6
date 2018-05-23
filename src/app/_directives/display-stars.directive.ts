import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisplayStars]'
})
export class DisplayStarsDirective {

  @Input() appDisplayStars: any;

  constructor(private el: ElementRef) {
  }

  setPercentageWidth(stars, outOf) {
    const percentage = stars / outOf * 100 + '%';
    this.el.nativeElement.style.width = percentage;
  }

}
