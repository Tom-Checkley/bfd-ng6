import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../../_services/company-info.service';
import { TestimonialService } from '../../../_services/testimonial.service';
import { Testimonial } from '../../../_classes/testimonial';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonials: Testimonial[];
  info: any;
  stars: any;
  outOf: any;

  constructor(private infoService: CompanyInfoService, private testimonialService: TestimonialService) { }

  ngOnInit() {
    this.infoService.getInfo().valueChanges().subscribe(info => {
      this.info = info;
    });
    this.getStars();
  }

  getStars() {
    this.testimonialService.getTotalStars().subscribe(totalStars => {
      this.outOf = totalStars[0];
      this.stars = totalStars[1];
    });
  }

}
