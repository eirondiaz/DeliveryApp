import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {

  constructor(private data: CartService) { }

  @Input() public cartData:any = {}
  @Output() public event = new EventEmitter<any>()
  
  ngOnInit(): void {
  }

  deleteCart(id: any) {
    this.event.emit(id)
  }

}
