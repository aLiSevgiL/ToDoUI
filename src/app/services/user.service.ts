import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { userResponceModel } from '../model/usersResponceModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:3000/user';
  
  


  constructor(private http:HttpClient) { }

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.apiUrl);
  
}

}
