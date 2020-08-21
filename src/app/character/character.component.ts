import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import {Character} from '../character';
import { Observable } from 'rxjs';
import {CharacterService} from '../character.service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  closeResult: string;
  characters: Character[];
  userId: number;
  newCharacter: Character = {
    characterName: '',
    playerName: '',
    characterRace: '',
    characterClass: '',
    alignment: '',
    level: 0,
    experience: 0,
    userId: null
  };
  constructor(private characterService: CharacterService, private authenticationService: AuthenticationService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true'){
      this.authenticationService.currentUser.subscribe((user) => {
        this.userId = user.id;
        this.newCharacter.userId = user.id;
      });
      this.getUserCharacters();
    }
  }
  getUserCharacters(): void {
    this.characterService.getUserCharacters(this.userId).subscribe((characters) => {
      this.characters = characters;
    });
  }
  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  saveCharacter(): void {
    this.characterService.saveCharacter(this.newCharacter).subscribe();
  }
}
