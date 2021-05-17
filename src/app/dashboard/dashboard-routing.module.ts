import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
import { HistoryComponent } from './components/history/history.component';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'account', component: AccountComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
