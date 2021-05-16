import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI = 'https://delivery-app-dr.herokuapp.com/api/v1/users'

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get<any>(`${this.urlAPI}/current-user`, {
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }
}
