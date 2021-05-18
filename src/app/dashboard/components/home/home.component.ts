import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private data: ProductService) {
    this.getAllProducts()
  }

  ngOnInit(): void {
  }

  products: Product[] = [
  ]
  filteredProducts: Product[] = []
  searching = false

  search(termino: string) {
    this.searching = true
    this.filteredProducts = this.products.filter((x: Product) => x.name.toLowerCase().includes(termino.toLowerCase()))
  }
  
  getAllProducts() {
    this.data.getAllProducts().subscribe(
      res => {
        this.products = res.data
      }
    )
  }
}
