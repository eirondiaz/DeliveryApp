import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HistoryComponent } from './components/history/history.component';
import { CartComponent } from './components/cart/cart.component';
import { ViewComponent } from './components/view/view.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductCardComponent,
    NavbarComponent,
    AccountComponent,
    OrdersComponent,
    HistoryComponent,
    CartComponent,
    ViewComponent,
    OrderDetailsComponent,
    CartCardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    HomeComponent,
    NavbarComponent
  ]
})
  
export class DashboardModule { }
