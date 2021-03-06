import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: ''
  };
  constructor(private userService: UserService, private router: Router) { }
  createUser(): void {
    this.userService.registerUser(this.user).subscribe( () => {
      // Clear the form
      this.user.username = '';
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.email = '';
      this.user.dob = '';
      this.user.password = '';
      // Redirect to page that shows users (promise not ignored)
      this.router.navigate(['/dashboard']).then();
    });
  }
  ngOnInit(): void {
  }
}
