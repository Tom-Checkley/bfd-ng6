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
  totalStars;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getUnverified()
      .subscribe(t => {
        this.testimonials = t;
      });

    this.testimonialService.getTotalStars()
      .subscribe(tS => {
        this.totalStars = tS;
      });
  }

  deleteTestimonial(id) {
    this.testimonialService.deleteTestimonial(id);
  }

  verifyTestimonial(t: Testimonial) {
    this.testimonialService.verifyTestimonial(t);
    const outOf = Number(this.totalStars[0]) + Number(t.outOf);
    const stars = Number(t.stars) + Number(this.totalStars[1]);
    this.testimonialService.setTotalStars(stars, outOf);
    this.testimonialService.deleteTestimonial(t.id);
  }

}
