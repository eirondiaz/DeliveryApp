import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private orderData: OrderService) {

    this.changeTab('ordered')
  }

  ngOnInit(): void {
  }
  
  orderList = []

  getOrders(status) {
    this.orderData.getOrders(status).subscribe(
      res => {
        this.orderList = res.data
      }
    ), error => {console.log(error)}
  }
  
  orderedActive :boolean
  acceptedActive:boolean
  inTransitActive:boolean
  deliveredActive:boolean

  changeTab(status: any) {

    if (status === 'ordered') {
      this.orderedActive = true
      this.acceptedActive = false
      this.inTransitActive = false
      this.deliveredActive = false
      this.getOrders('ordered')
      
    }
    if (status === 'accepted') {
      this.orderedActive = false
      this.acceptedActive= true
      this.inTransitActive = false
      this.deliveredActive = false

      this.getOrders('accepted')
    }
    if (status === 'inTransit') {
      this.orderedActive = false
      this.acceptedActive = false
      this.inTransitActive= true
      this.deliveredActive = false

      this.getOrders('in-transit')
    }
    if (status === 'delivered') {
      this.orderedActive = false
      this.acceptedActive = false
      this.inTransitActive = false
      this.deliveredActive = true

      this.getOrders('delivered')
    }

  }

}
