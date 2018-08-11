import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Testimonial } from '../../../../_classes/testimonial';
import { TestimonialService } from '../../../../_services/testimonial.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-leave-testimonial',
  templateUrl: './leave-testimonial.component.html',
  styleUrls: ['./leave-testimonial.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        display: 'block',
        left: '0'
      })),
      state('out', style({
        left: '-100%',
        display: 'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class LeaveTestimonialComponent implements OnInit {
  @Input() formState: string;
  @Output() formStateChange = new EventEmitter();

  testimonial: Testimonial;
  name: string;
  location: string;
  stars: number;
  outOf = 5;
  body: string;
  date: number;
  id: string;
  submitted = false;

  constructor(private testionialService: TestimonialService) { }

  ngOnInit() {
  }

  toggleForm() {
    this.formState === 'in'
        ? this.formState = 'out'
        : this.formState = 'in';
    this.formStateChange.emit(this.formState);
  }

  submitTestimonial(e) {
    e.preventDefault();
    this.date = Date.now();
    if (!this.body) { this.body = ''; }
    this.testimonial = {
      name: this.name,
      location: this.location,
      stars: this.stars,
      outOf: this.outOf,
      body: this.body,
      date: this.date,
    };
    this.testionialService.submitTestimonial(this.testimonial);
    this.submitted = true;
  }

}
