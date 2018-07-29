import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  userLoggedIn: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userLoggedIn = this.userService.userLoggedIn;
  }

  logOut() {
    this.userService.logout();
  }

}
