import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../../_services/company-info.service';
import { TestimonialService } from '../../../_services/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: any;
  stars: any;
  outOf: any;

  constructor(private infoService: CompanyInfoService, private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.infoService.getInfo().valueChanges().subscribe(info => {
      this.info = info;
    });
    this.testimonialService.getVerified().subscribe(testimonials => {
      testimonials.forEach(testimonial => {
        const s = parseInt(testimonial.stars, 10);
        this.stars += s;
      });
    });
  }

}
