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

  todayList = []

  today = new Date()
  
  getOrders(status) {
    
    this.orderData.getOrders(status).subscribe(
      res => {
        this.orderList = res.data
        
        this.orderList.map(x => {
                    
          let currentDay = this.today.getDate().toString()

          let currentMonth = (this.today.getMonth() + 1).toString().length == 1 ?
            '0' + (this.today.getMonth() + 1) : (this.today.getMonth() + 1).toString()
          
          let orderDay = x.createdAt.substring(8, 10)
          
          let orderMonth = x.createdAt.substring(5, 7)
          
          if (currentDay == orderDay && currentMonth == orderMonth) {
            return x.createdAt = 'Hoy'
          }

        })
      }
    ), error => console.log(error)
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
