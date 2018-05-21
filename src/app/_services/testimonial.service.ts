import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private verifiedPath = '/verifiedTestimonials';
  verifiedRef: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.verifiedRef = db.list(this.verifiedPath);
  }

  getVerified() {
    return this.verifiedRef;
  }
}
