import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../../_classes/testimonial';
import { TestimonialService } from '../../../../_services/testimonial.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-testimonials',
  templateUrl: './display-testimonials.component.html',
  styleUrls: ['./display-testimonials.component.scss']
})
export class DisplayTestimonialsComponent implements OnInit {
  testimonials;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService
      .getVerified()
      .valueChanges()
      .subscribe(testimonials => {
        this.testimonials = testimonials;
      });
  }

}
