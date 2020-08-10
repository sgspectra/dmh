import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';


export interface NewUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  password: string;
}

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user: NewUser = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: ''
  };
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
}
