import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import {Observable} from 'rxjs';
import {Character} from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }
  getUserCharacters(userId: number): Observable<Character[]> {
    return this.httpClient.get<Character[]>('http://localhost:8080/api/characters/user/' + userId);
  }
  saveCharacter(character: Character): Observable<Character> {
    const body = {
      characterName: character.characterName,
      playerName: character.playerName,
      characterRace: character.characterRace,
      characterClass: character.characterClass,
      alignment: character.alignment,
      level: character.level,
      experience: character.experience,
      strength: character.strength,
      dexterity: character.dexterity,
      intelligence: character.intelligence,
      constitution: character.constitution,
      wisdom: character.wisdom,
      charisma: character.charisma,
      armorClass: character.armorClass,
      userId: character.userId
    };
    return this.httpClient.post<Character>('http://localhost:8080/api/characters/create', body);
  }
}
