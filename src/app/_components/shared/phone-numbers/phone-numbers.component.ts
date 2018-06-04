import { Component, OnInit } from '@angular/core';
import { Information } from '../../../_classes/information';
import { CompanyInfoService } from '../../../_services/company-info.service';

@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.scss']
})
export class PhoneNumbersComponent implements OnInit {
  info: Information;

  constructor(private infoService: CompanyInfoService) { }

  ngOnInit() {
      this.infoService.getInfo().valueChanges().subscribe(info => {
      this.info = info;
    });
  }

}
