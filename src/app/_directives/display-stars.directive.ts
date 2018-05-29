import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisplayStars]'
})
export class DisplayStarsDirective {

  @Input() stars: any;
  @Input() outOf: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setPercentageWidth();
  }

  private setPercentageWidth() {
    const stars = parseInt(this.stars, 10);
    const outOf = parseInt(this.outOf, 10);
    const percentage = stars / outOf * 100 + '%';
    this.el.nativeElement.style.width = percentage;
  }

}
