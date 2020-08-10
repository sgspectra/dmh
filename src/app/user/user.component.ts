import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  constructor(private userService: UserService) { }
  getUser(): void {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUser();
    this.getAllUsers();
  }
}
