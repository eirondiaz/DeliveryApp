import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartData: CartService, private userData:UserService) { 
    this.getCarts()
    this.getCurrenUser()
  }

  ngOnInit(): void {
  }

  ownAdr = true
  provAdr = false
  newAdr = false

  ownAddress() {
    this.ownAdr = true
    this.provAdr = false
  }

  provAddress() {
    this.newAdr = true
    this.ownAdr = false
    this.provAdr = true
  }
  
  provitionalAddress: any
  
  newAddress() {
    Swal.fire({
      icon: 'question',
      text: 'Ingrese su direccion provisional: ',
      input: 'text',
      confirmButtonColor: '#fa5830',
      showCancelButton: true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Aceptar',
    }).then(x => {
      if (x.isConfirmed) {
        this.provitionalAddress = x.value
        this.provAddress()
        this.newAdr = true
      }
      else {
        this.ownAddress()
        this.newAdr = false
      }
    })
  }

  cartList = []
  subtotal= 0
  descuento = 0
  total = 0
  getCarts() {
    this.cartData.getAllCarts().subscribe(
      res => {
        this.subtotal = 0
        this.descuento = 0
        this.total = 0
        this.cartList = res.data.reverse()
        res.data.map(x => this.subtotal += x.total)
        this.total = this.subtotal - this.descuento
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
  currentUser
  getCurrenUser(){
    this.userData.getCurrentUser().subscribe(
      res => {
        this.currentUser = res.data
      }
    )
  }

}
