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
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    {
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    {
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    {
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
      name: 'Pollo con tostones',
      price: 150,
      desc: 'Pollo con tostones y ketchup',
    },
    {
      name: 'Pollo con papas',
      price: 100,
      desc: 'Pollo con papas y ketchup',    
    },
    {
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
