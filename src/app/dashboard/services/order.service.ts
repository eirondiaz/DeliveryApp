import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient ) { }

  urlAPI = 'https://delivery-app-dr.herokuapp.com/api/v1/orders'

  createOrder(data: any) {
    return this.http.post<any>(this.urlAPI, data, {
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  getOrders(status: string) {
    return this.http.get<any>(`${this.urlAPI}/user?status=${status}`,{
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  getOrderById(id: string) {
    return this.http.get<any>(`${this.urlAPI}/${id}`,{
      headers: new HttpHeaders({    
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  getTopProducts() {
    return this.http.get<any>(`${this.urlAPI}/top-products`,)
  }
}
