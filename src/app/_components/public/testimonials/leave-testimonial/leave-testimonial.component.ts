import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../../_classes/testimonial';
import { TestimonialService } from '../../../../_services/testimonial.service';

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

  constructor(private testionialService: TestimonialService) { }

  ngOnInit() {
  }

  submitTestimonial(e) {
    e.preventDefault();
    this.date = Date.now();
    this.testimonial = {
      name: this.name,
      location: this.location,
      stars: this.stars,
      outOf: this.outOf,
      body: this.body,
      date: this.date,
    };
    this.testionialService.submitTestimonial(this.testimonial);
  }

}
