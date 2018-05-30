import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisplayStars]'
})
export class DisplayStarsDirective implements OnChanges {

  @Input() stars: any;
  @Input() outOf: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setPercentageWidth();
  }

  private setPercentageWidth() {
    const stars = parseFloat(this.stars);
    const outOf = parseFloat(this.outOf);
    const percentage = stars / outOf * 100 + '%';
    this.el.nativeElement.style.width = percentage;
  }

}
