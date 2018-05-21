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
}
