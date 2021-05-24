import { OrderService } from './../../../dashboard/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orders: any[] = []
  totalOrders = 0
  totalMoney = 0
  countTotal = false
  countMoney = false

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders()
    this.getOrdersCurrentDay()
  }

  getAllOrders() {
    this.orderService.getAllOrders('', 8).subscribe(
      res => {
        this.orders = res.data
      },
      error => {
        console.log(error)
      }
    )
  }

  getOrdersCurrentDay() {
    console.log('object')
    this.orderService.getOrdersCurrentDay().subscribe(
      res => {
        this.totalOrders = res.data.length
        this.totalMoney = res.sellTotal.total
        this.countTotal = res.count
        this.countMoney = res.sellTotal.countm
      },
      error => {
        console.log(error)
      }
    )
  }

}
