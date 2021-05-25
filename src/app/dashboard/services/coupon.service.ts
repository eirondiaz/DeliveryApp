import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  urlAPI = 'https://delivery-app-dr.herokuapp.com/api/v1/coupons'

  constructor(private http: HttpClient) { }

  getAllCoupons() {
    return this.http.get<any>(this.urlAPI, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  createCoupon(data: any) {
    return this.http.post<any>(this.urlAPI, data, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }

  getCouponByCode(code: string) {
    return this.http.get<any>(`${this.urlAPI}/${code}`, {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token') + ''
      })
    })
  }
}
