import { OrderService } from './../../../dashboard/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orders: any[] = []
  topProdcuts: any[] = []
  totalOrders = 0
  totalMoney = 0
  countTotal = false
  countMoney = false

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders()
    this.getOrdersCurrentDay()
    this.getTopProducts()
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

  getTopProducts() {
    this.orderService.getTopProducts().subscribe(
      res => {
        this.topProdcuts = res.data
        console.log(this.topProdcuts)
      },
      error => {
        console.log(error)
      }
    )
  }

}
