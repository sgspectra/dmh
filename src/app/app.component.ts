import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dungeon Master Helper';
  constructor(private authenticationService: AuthenticationService) { }
  loggedInUser = this.authenticationService.currentUser.subscribe((user) => { console.log(user)});
}
