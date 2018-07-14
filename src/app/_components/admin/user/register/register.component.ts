import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.registerUser(this.email, this.password);
    this.email = '';
    this.password = '';
    this.router.navigate(['/login']);
  }

}
