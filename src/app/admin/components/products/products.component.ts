import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/dashboard/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private data: ProductService) {
    this.getAllProducts()
  }

  ngOnInit(): void {
  }
  products:any = []
  getAllProducts() {
    this.data.getAllProducts().subscribe(
      res => this.products = res.data
    )
  }
  product: any = {}
  
  createProduct() {
    this.data.createProduct(this.product).subscribe(
      res => {
        console.log(res.data);
        this.getAllProducts()
      }
    )
  }

  deleteProduct(id: string) {
    this.data.deleteProduct(id).subscribe(
      res => {
        console.log(res.data);
        this.getAllProducts()
      }, error => console.log(error)
    )
  }

  productsFiltered: any = []
  searchProduct(name: string) {
    this.productsFiltered = this.products.filter((x: any) => {
      return x.name.toLowerCase().trim().includes(name.toLowerCase())
    })
  }
}
