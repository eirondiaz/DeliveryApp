import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
    this.checkRoute()  
  }

  ngOnInit(): void {
  }

  checkRoute() {
    let urlProv = '/dashboard'
    if (this.router.url===`${urlProv}/home`) {      
      this.homeActive = true
    }
    if (this.router.url===`${urlProv}/orders`) {      
      this.ordersActive = true
    }
    if (this.router.url===`${urlProv}/cart`) {      
      this.cartActive = true
    }
    if (this.router.url===`${urlProv}/account`) {      
      this.accountActive = true
    }
  }
  
  homeActive 
  ordersActive 
  cartActive
  accountActive
  
  changePage(id: any) {
    console.log(id)

    if (id === 'home') {
      this.homeActive = true
      this.ordersActive = false
      this.cartActive = false
      this.accountActive = false
    }

    if (id === 'orders') {
      this.homeActive =  false
      this.ordersActive =  true
      this.cartActive = false
      this.accountActive = false      
    }

    if (id === 'cart') {
      this.homeActive =  false
      this.ordersActive =  false
      this.cartActive =  true
      this.accountActive = false      
    }

    if (id === 'account') {
      this.homeActive =  false
      this.ordersActive = false
      this.cartActive = false 
      this.accountActive =  true     
    }
  }

}
