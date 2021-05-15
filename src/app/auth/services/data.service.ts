<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
>>>>>>> lewis

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class DataService {

  constructor() { }
=======
export class AuthService {

  constructor(private http: HttpClient) { }

  urlAPI = 'https://delivery-app-dr.herokuapp.com/api/v1/auth'

  createUser(user: User) {
    return this.http.post<any>(`${this.urlAPI}/register`, user)
  }

  login(user: any) {
    return this.http.post<any>(`${this.urlAPI}/login`, user)
  }

>>>>>>> lewis
}
