import { ViewCouponComponent } from './components/view-coupon/view-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ProductsComponent } from './components/products/products.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin/home' },
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'coupons/view/:code', component: ViewCouponComponent },
  { path: 'products/view/:id', component: ViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
