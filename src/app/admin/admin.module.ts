import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [HomeComponent, AnalyticsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule
  ]
})
export class AdminModule { }
