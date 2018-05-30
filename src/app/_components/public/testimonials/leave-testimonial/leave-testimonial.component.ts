import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../../_classes/testimonial';

@Component({
  selector: 'app-leave-testimonial',
  templateUrl: './leave-testimonial.component.html',
  styleUrls: ['./leave-testimonial.component.scss']
})
export class LeaveTestimonialComponent implements OnInit {
  testimonial: Testimonial;
  name: string;
  location: string;
  stars: number;
  outOf = 5;
  body: string;
  date: number;
  id: string;
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitTestimonial($event) {}

}
