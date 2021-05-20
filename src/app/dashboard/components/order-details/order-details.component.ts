import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  id: string
  constructor(private activatedRoute: ActivatedRoute, private orderData: OrderService) {
    this.id = this.activatedRoute.snapshot.params.id
    this.getOrder(this.id)
  }

  ngOnInit(): void {
  }

  order = {
    address: '',
    createdAt: '',
    items: {},
    status: '',
    total: 0,
    discount: 0,
    subtotal:0,
    updatedAt: '',
    user: {},
    _id: ''
  }

  products= []
  status: string
  
  canDelete = false
  getOrder(id: string) {
    this.orderData.getOrderById(id).subscribe(
      res => {
        console.log(res.data)
        this.order = res.data
        this.products = res.data.items

        if (this.order.status === 'ordered') {
          this.status = 'Ordenado'
          this.canDelete = true
        }
        if (this.order.status === 'accepted') {
          this.status = 'Aceptada'
        }
        if (this.order.status === 'in-transit') {
          this.status = 'En transito'
        }
        if (this.order.status === 'delivered') {
          this.status = 'Enviada'
        }
        
      }, error => console.log(error)
    )
  }

}
