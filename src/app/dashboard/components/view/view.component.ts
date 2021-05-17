import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  id: string
  QTY = 1

  prod: Product = {}
  constructor(private activatedRoute: ActivatedRoute, private data: ProductService) {
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
}
