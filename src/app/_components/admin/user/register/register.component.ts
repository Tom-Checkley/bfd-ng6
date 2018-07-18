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
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirm: string;
  registeredEmails: any[];
  isRegistered = false;
  message: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getRegisteredEmails()
      .subscribe(registered => {
        this.registeredEmails = registered;
      });
  }

  register() {
    this.registeredEmails.forEach(item => {
      if (item['email'] === this.email) {
        this.isRegistered = true;
      }
    });
    if (this.isRegistered) {
      this.userService.registerUser(this.email, this.password);
      this.message = 'Success, you\'re now registered as an admin';
      this.email = '';
      this.password = '';
      console.log(this.message);
      this.router.navigate(['/login']);
    } else {
      this.message = 'Sorry you are not authorised to register as an admin';
      console.log(this.message);
    }
  }

}
