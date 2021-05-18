import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() {

    this.changeTab('ordered')
  }

  ngOnInit(): void {
  } 
  
  orderedActive 
  acceptedActive
  inTransitActive
  deliveredActive

  changeTab(status: any) {
    console.log(status)
    
    if (status === 'ordered') {
      this.orderedActive = true
      this.acceptedActive = false
      this.inTransitActive = false
      this.deliveredActive = false
    }
    if (status === 'accepted') {
      this.orderedActive = false
      this.acceptedActive= true
      this.inTransitActive = false
      this.deliveredActive = false
    }
    if (status === 'inTransit') {
      this.orderedActive = false
      this.acceptedActive = false
      this.inTransitActive= true
      this.deliveredActive = false
    }
    if (status === 'delivered') {
      this.orderedActive = false
      this.acceptedActive = false
      this.inTransitActive = false
      this.deliveredActive = true
    }

    console.log(
      this.orderedActive,
      this.acceptedActive,
      this.inTransitActive,
      this.deliveredActive)
    
  }

}
