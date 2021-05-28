import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

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
  
  createProduct(product: Product) {
    return this.http.post<any>(this.urlAPI, product, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    })
  }
  
  deleteProduct(id: string) {
    return this.http.delete<any>(`${this.urlAPI}/${id}`, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    })
  }
  
}
