import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartData: CartService,
    private userData: UserService,
    private orderData: OrderService,
    private router: Router,
    private couponData: CouponService
  ) {
    this.getCarts()
    this.getCurrenUser()
  }

  ngOnInit(): void {
  }

  setCoupon= false
  appliedCoupon= false

  addCoupon() {
    this.setCoupon = true
  }

  loading = false

  createOrder() {
    this.loading = true
    let adr = this.ownAdr? this.currentUser.address: this.provitionalAddress
    
    let data = {
      address: adr,
      subtotal: this.subtotal,
      coupon: this.couponD.code
    }
    this.orderData.createOrder(data).subscribe(
      res => {
        this.loading = false
        if (res.ok) {
          this.router.navigate(['/dashboard/orders'])
        } else {
          if (res.msg == 'coupon already used') {
            Swal.fire({
              icon: 'error',
              text:'Este cupon no puede ser aplicado',
              confirmButtonColor: '#fa5830'
            })
          }
          this.setCoupon = false
          this.appliedCoupon = false
          this.coupon = ''          
          this.couponD = {}
          this.total = this.subtotal
          this.descuento = 0
        }
      }, error => {
        console.log(error)
        this.loading = false
      }
    )
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

  coupon = ''
  couponD:any = {}
  getCouponByCode(couponCode: string) {
    this.couponData.getCouponByCode(couponCode).subscribe(
      res => {
        if (res.ok) {
          console.log(res);
          this.appliedCoupon = true
          this.couponD = res.data
          this.descuento = this.subtotal * (this.couponD.discount / 100)
          this.total = this.subtotal - this.descuento
          this.coupon = couponCode
        } else {
          if (res.msg == 'coupon deprecated') {
            Swal.fire({
              icon: 'error',
              text: 'Este cupon esta obsoleto',
              confirmButtonColor: '#fa5830'
            })
          }

          this.setCoupon = false
          this.appliedCoupon = false
          this.coupon = ''          
        }
      }, error => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          text: 'Este cupon no es valido',
          confirmButtonColor: '#fa5830'
        })

        this.setCoupon = false
        this.appliedCoupon = false
        this.coupon = ''  
      }
    )
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
