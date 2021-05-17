import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      _id: '123',
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      _id: '456',
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    {
      _id: '789',
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      _id: '987',
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    
  ]
  filteredProducts: Product[] = []
  searching = false

  search(termino: string) {
    this.searching = true
    this.filteredProducts = this.products.filter((x: Product) => x.name.toLowerCase().includes(termino.toLowerCase()))
  }

}
