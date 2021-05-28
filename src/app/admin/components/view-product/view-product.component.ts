import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/dashboard/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private data: ProductService, private router: ActivatedRoute) {
    this.getProductById(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
  }

  product:any = {}

  getProductById(id) {
    this.data.getProductById(id).subscribe(
      res => this.product = res.data
    )
  }
}
