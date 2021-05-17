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
    console.log(this.router.url)
    let urlProv = '/dashboard'
    if (this.router.url===`${urlProv}/home`) {      
      this.homeActive = true
    }
    if (this.router.url===`${urlProv}/orders`) {      
      this.ordersActive = true
    }
    if (this.router.url===`${urlProv}/history`) {      
      this.historyActive = true
    }
    if (this.router.url===`${urlProv}/account`) {      
      this.accountActive = true
    }
  }
  
  homeActive 
  ordersActive 
  historyActive
  accountActive
  
  changePage(id: any) {
    console.log(id)

    if (id === 'home') {
      this.homeActive = true
      this.ordersActive = false
      this.historyActive = false
      this.accountActive = false
    }

    if (id === 'orders') {
      this.homeActive =  false
      this.ordersActive =  true
      this.historyActive = false
      this.accountActive = false      
    }

    if (id === 'history') {
      this.homeActive =  false
      this.ordersActive =  false
      this.historyActive =  true
      this.accountActive = false      
    }

    if (id === 'account') {
      this.homeActive =  false
      this.ordersActive = false
      this.historyActive = false 
      this.accountActive =  true     
    }
  }

}
