import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  id: string
  QTY = 1

  prod: Product = {}
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id
    this.prod = this.products.find(x=> x._id == this.id)

    console.log(this.prod);
  }

  ngOnInit(): void {
  }

  minus() {
    this.QTY --
  }
  
  plus() {
    this.QTY ++
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
}
