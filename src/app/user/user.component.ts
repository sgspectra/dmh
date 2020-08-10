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
  constructor(private userService: UserService) { }
  getUser(): void {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }
  ngOnInit(): void {
    this.getUser();
  }
}
