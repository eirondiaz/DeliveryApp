import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { ProductsComponent } from './components/products/products.component';
import { CouponsComponent } from './components/coupons/coupons.component';


@NgModule({
  declarations: [HomeComponent, AnalyticsComponent, ProductsComponent, CouponsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule
  ]
})
export class AdminModule { }
