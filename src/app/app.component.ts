import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeliveryApp';


  constructor() {
    
  }

  new = true
  orders = false
  history = false
  account = false

  click(hash:any) {
    console.log(hash.id);
    
    if (hash.id == 'new') {
      this.new = true
      this.orders = false
      this.history = false
      this.account = false
    } 
    if (hash.id == 'orders') {
      this.new = false
      this.orders = true
      this.history = false
      this.account = false
    } 
    if (hash.id == 'history') {
      this.new = false
      this.orders = false
      this.history = true
      this.account = false
    } 
    if (hash.id == 'account') {
      this.new = false
      this.orders = false
      this.history = false
      this.account = true
    } 
    
    console.log(this.new);
  }

}
