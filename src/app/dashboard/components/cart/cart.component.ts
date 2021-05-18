import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartData: CartService) { 
    this.getCarts()
  }

  ngOnInit(): void {
  }

  adr = true
  changeAddress() {
    this.adr = !this.adr
  }

  cartList = []
  subtotal= 0
  descuento = 0
  total = 0
  getCarts() {
    this.cartData.getAllCarts().subscribe(
      res => {
        this.subtotal= 0
        this.descuento = 0
        this.total = 0
        this.cartList = res.data.reverse()
        res.data.map(x => this.subtotal += x.total)
        this.total = this.subtotal
      }
    )
  }

  delete(id) {
    this.cartData.deleteCart(id).subscribe(
      res => {
        this.getCarts()
      }, error => console.log(error)
    )
  }

}
