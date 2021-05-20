import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  urlAPI = 'https://delivery-app-dr.herokuapp.com/api/v1/products'

  getAllProducts() {
    return this.http.get<any>(this.urlAPI)
  }

  getProductById(id: string) {
    return this.http.get<any>(`${this.urlAPI}/${id}`)
  }
  
}
