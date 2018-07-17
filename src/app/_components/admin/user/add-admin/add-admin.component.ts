import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  email: string;
  registeredEmails;

  constructor(private afAuth: UserService) { }

  ngOnInit() {
    this.afAuth.getRegisteredEmails()
      .subscribe(registered => {
        this.registeredEmails = registered;
      });
  }

  addAdmin() {
    this.afAuth.registerAdminEmail(this.email);
  }

}
