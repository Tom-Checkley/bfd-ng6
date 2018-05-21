import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../../../_services/company-info.service';
import { Information } from '../../../_classes/information';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  info: Information;

  constructor(private infoService: CompanyInfoService) { }

  ngOnInit() {
    this.infoService
      .getInfo()
      .valueChanges()
      .subscribe(info => {
        this.info = info;
      });
  }

}
