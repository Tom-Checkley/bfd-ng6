import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
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
  confirm: string;

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
