import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/dashboard/services/coupon.service';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.scss']
})
export class ViewCouponComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private data: CouponService
    
  ) {
    this.getCoupon(this.activatedRoute.snapshot.params.code)
  }

  ngOnInit(): void {
  }

  coupon: any = {}
  getCoupon(code: string) {
    this.data.getCouponByCode(code).subscribe(
      res => {
        console.log(res.data)
        this.coupon = res.data

      }
    )
  }

}
