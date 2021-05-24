import { OrderService } from './../../../dashboard/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js'

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartData2: SingleDataSet = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(5,155,255,0.3)', 'rgba(255,144,32,0.3)', 'rgba(255,194,52,0.3)'],
    },
  ];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getTopProducts()
  }

  getTopProducts() {
    this.orderService.getTopProducts().subscribe(
      res => {
        console.log(res)
        this.doughnutChartLabels = res.data.map(x => x.product[0].name)
        this.doughnutChartData = res.data.map(x => x.qty)
        this.doughnutChartData2 = res.data.map(x => x.total)
      },
      error => {
        console.log(error)
      }
    )
  }

}
