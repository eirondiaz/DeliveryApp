import { CouponService } from './../../../dashboard/services/coupon.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  coupons: any[] = []
  coupon: any = {
    code: '',
    discount: 0,
    usesLimit: 0
  }

  dice = false

  constructor(
    private couponsService: CouponService,
    public breakpointObserver: BreakpointObserver
  ) { 
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.dice = true          
        } else {
          this.dice = false
        }
      });
  }

  ngOnInit(): void {
    this.getAllCoupons()
  }

  getAllCoupons() {
    this.couponsService.getAllCoupons().subscribe(
      res => {
        this.coupons = res.data
      },
      err => {
        console.log(err)
      }
    )
  }

  generateCode() {
    let length = 16
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let retVal = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    this.coupon.code = retVal
    return retVal;
}

  create() {
    this.couponsService.createCoupon(this.coupon).subscribe(
      res => {
        console.log(res)
        this.getAllCoupons()
        this.coupon = {
          code: '',
          discount: 0,
          usesLimit: 0
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
