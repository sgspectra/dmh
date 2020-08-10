import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/api/users/getall');
  }
  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/users/' + id);
  }
  registerUser(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/api/users/create', user);
  }
}
