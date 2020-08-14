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
}
