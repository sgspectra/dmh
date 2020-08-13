import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {Observable} from 'rxjs';
import {User} from '../user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authenticationService: AuthenticationService) { }
  login(): void {
    this.authenticationService.login(this.username, this.password).subscribe();
  }
  ngOnInit(): void {
  }

}
