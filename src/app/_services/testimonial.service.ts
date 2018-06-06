import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Testimonial } from '../_classes/testimonial';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonial: Testimonial;

  private verifiedPath = '/verifiedTestimonials';
  verifiedRef: AngularFireList<Testimonial>;
  verifiedsToGet: Observable<any[]>;

  private totalStarsPath = '/totalStars';
  totalRef: Observable<any[]>;
  totalStars: Observable<any>;

  private unverifiedTestimonials = '/unverifiedTestimonials';
  unverifiedRef: AngularFireList<Testimonial>;
  unverifiedsToGet: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.verifiedsToGet = db.list(this.verifiedPath).valueChanges();

    this.totalRef = db.list(this.totalStarsPath).valueChanges();

    this.totalStars = db.object(this.totalStarsPath).valueChanges();

    this.unverifiedsToGet = db.list(this.unverifiedTestimonials).valueChanges();
  }

  getVerified() {
    return this.verifiedsToGet;
  }

  getTotalStars() {
    return this.totalRef;
  }

  getUnverified() {
    return this.unverifiedsToGet;
  }

  setTotalStars(stars, outOf) {
    const dbRef = this.db.object(this.totalStarsPath);
    dbRef.set({
      outOf: outOf,
      stars: stars
    });
  }

  submitTestimonial(t: Testimonial) {
    this.unverifiedRef = this.db.list(this.unverifiedTestimonials);
    const newT = this.unverifiedRef.push({
      name: t.name,
      location: t.location,
      stars: t.stars,
      outOf: t.outOf,
      body: t.body,
      date: t.date,
    });
    newT.update({id: newT.key});
  }

  deleteTestimonial(id) {
    const dbRef = this.db.list(this.unverifiedTestimonials);
    dbRef.remove(id);
  }

  verifyTestimonial(t) {
    this.verifiedRef = this.db.list(this.verifiedPath);
    const newT = this.verifiedRef.push({
      name: t.name,
      location: t.location,
      stars: t.stars,
      outOf: t.outOf,
      body: t.body,
      date: t.date,
    });
    newT.update({id: newT.key});
  }

}
