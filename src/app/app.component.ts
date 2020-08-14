import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dungeon Master Helper';
  username: string;
  constructor(private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') == 'true'){
      this.authenticationService.currentUser.subscribe((user) => {
        console.log(user);
        this.username = user.username;
      });
    }
  }
  logout(): void {
    this.authenticationService.logout();
    window.location.href = '/dashboard';
  }
}
