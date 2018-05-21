import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Information } from '../_classes/information';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  private dbPath = '/companyInfo';

  infoRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.infoRef = db.object(this.dbPath);
  }

  getInfo(): AngularFireObject<any> {
    return this.infoRef;
  }

  updateInfo(info) {
    this.infoRef.set({
      mainNumber: info.mainNumber,
      secondaryNumber: info.secondaryNumber,
      addressLine1: info.addressLine1,
      addressLine2: info.addressLine2,
      addressLine3: info.addressLine3,
      city: info.city,
      postcode: info.postcode,
      email: info.email
    });
  }
}
