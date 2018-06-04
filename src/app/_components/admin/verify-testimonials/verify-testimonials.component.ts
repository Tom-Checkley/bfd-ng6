import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../../_services/testimonial.service';
import { Testimonial } from '../../../_classes/testimonial';

@Component({
  selector: 'app-verify-testimonials',
  templateUrl: './verify-testimonials.component.html',
  styleUrls: ['./verify-testimonials.component.scss']
})
export class VerifyTestimonialsComponent implements OnInit {
  testimonials;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getUnverified()
      .subscribe(t => {
        this.testimonials = t;
      });
  }

  deleteTestimonial(id) {
    this.testimonialService.deleteTestimonial(id);
  }

  verifyTestimonial(t: Testimonial) {
    this.testimonialService.verifyTestimonial(t);
  }

}
