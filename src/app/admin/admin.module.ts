import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { ProductsComponent } from './components/products/products.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ViewCouponComponent } from './components/view-coupon/view-coupon.component';
import { ViewProductComponent } from './components/view-product/view-product.component';


@NgModule({
  declarations: [HomeComponent, AnalyticsComponent, ProductsComponent, CouponsComponent, ViewCouponComponent, ViewProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    FormsModule
  ]
})
export class AdminModule { }
