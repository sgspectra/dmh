import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  login(): void {
    this.authenticationService.login(this.username, this.password).subscribe(
      (user) => {
        window.location.href = '/dashboard';
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
  }

}
