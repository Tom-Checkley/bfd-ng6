import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs';
import { Information } from '../../../_classes/information';
import { CompanyInfoService } from '../../../_services/company-info.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  info: any;

  constructor(private infoService: CompanyInfoService) {
  }

  ngOnInit() {
    this.infoService.getInfo().valueChanges().subscribe(info => {
      this.info = info;
    });
  }

}
