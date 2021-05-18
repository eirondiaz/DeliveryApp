import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlAPI: string = 'https://delivery-app-dr.herokuapp.com/api/v1/carts'

  constructor(private http: HttpClient) { }

  getAllCarts() {
    return this.http.get<any>(this.urlAPI, {
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  createCart(data: any) {
    return this.http.post<any>(this.urlAPI, data, {
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  deleteCart(id: string) {
    return this.http.delete<any>(this.urlAPI + '/' + id, {
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }
}
