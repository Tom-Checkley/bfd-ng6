import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Testimonial } from '../_classes/testimonial';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private verifiedPath = '/verifiedTestimonials';
  verifiedRef: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.verifiedRef = db.list(this.verifiedPath).valueChanges();
  }

  getVerified() {
    return this.verifiedRef;
  }
}
