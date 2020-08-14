import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dungeon Master Helper';
  username: string;
  loggedInUser = this.authenticationService.currentUser.subscribe((user) => {
    console.log(user);
    this.username = user.username;
  });
  logout(): void {
    this.authenticationService.logout();
    window.location.href = '/dashboard';
  }
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
}
