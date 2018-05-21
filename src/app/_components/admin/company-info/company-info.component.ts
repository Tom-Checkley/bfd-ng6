import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../../_services/company-info.service';
import { Information } from '../../../_classes/information';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  info: Information;
  mainNumber: string;
  secondaryNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  postcode: string;

  constructor(private infoService: CompanyInfoService) { }

  ngOnInit() {
    this.infoService.getInfo().valueChanges().subscribe(info => {
      this.info = info;
      this.mainNumber = this.info.mainNumber;
      this.secondaryNumber = this.info.secondaryNumber;
      this.addressLine1 = this.info.addressLine1;
      this.addressLine2 = this.info.addressLine2;
      this.addressLine3 = this.info.addressLine3;
      this.city = this.info.city;
      this.postcode = this.info.postcode;
    });
  }

  updateInfo($ev) {
    $ev.preventDefault();
    this.info = {
      mainNumber: this.mainNumber,
      secondaryNumber: this.secondaryNumber,
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
      addressLine3: this.addressLine3,
      city: this.city,
      postcode: this.postcode
    };
    console.log(this.info);
    this.infoService.updateInfo(this.info);
  }

}
