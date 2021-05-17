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
      _id: '1',
      name: 'hamburguesa',
      photo: '../../../../assets/hamburguesa.jpg',
      price: 150,
      desc: 'hamburguesa con papas',    
    },    
    {
      _id: '2',
      name: 'Pechuga a la plancha',
      photo: '../../../../assets/pechuga_a_la_plancha.jpg',
      price: 250,
      desc: 'pechuga a la plancha con ensalada',    
    },    
    {
      _id: '3',
      name: 'Pollo con papas',
      photo: '../../../../assets/pollo_con_papas.jpg',
      price: 100,
      desc: 'pollo con papas fritas',    
    },    
    {
      _id: '4',
      name: 'sandwich',
      photo: '../../../../assets/sandwich.jpg',
      price: 150,
      desc: 'Sandwich de pollo',    
    },    
  ]
  filteredProducts: Product[] = []
  searching = false

  search(termino: string) {
    this.searching = true
    this.filteredProducts = this.products.filter((x: Product) => x.name.toLowerCase().includes(termino.toLowerCase()))
  }

}
