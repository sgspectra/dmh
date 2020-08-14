import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import {Character} from '../character';
import { Observable } from 'rxjs';
import {CharacterService} from '../character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: Character[];
  userId: number;
  constructor(private characterService: CharacterService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true'){
      this.authenticationService.currentUser.subscribe((user) => {
        this.userId = user.id;
      });
      this.getUserCharacters();
    }
  }
  getUserCharacters(): void {
    this.characterService.getUserCharacters(this.userId).subscribe((characters) => {
      this.characters = characters;
    });
  }

}
