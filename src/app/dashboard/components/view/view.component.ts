import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  id: string
  QTY = 1

  prod: Product = {}
  constructor(private activatedRoute: ActivatedRoute,
    private data: ProductService,
    private cartData: CartService) {
    this.id = this.activatedRoute.snapshot.params.id
    this.getProductById(this.id)
  }

  ngOnInit(): void {
  }

  minus() {
    this.QTY --
  }
  
  plus() {
    this.QTY ++
  }

  product: Product = {}

  getProductById(id: string) {
    this.data.getProductById(id).subscribe(
      res =>{
        this.product = res.data
      }
    )
  }

  adding = false
  
  addToCart() {
    this.adding = true
    let data = {
      product: this.product._id,
      quantity: this.QTY,
    }
    this.cartData.createCart(data).subscribe(
      res=>{
        this.adding = false
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
          icon: 'success',
          title: 'Agregado al carrito.'
        })
      }, error => this.adding = false
    )
  }
}
