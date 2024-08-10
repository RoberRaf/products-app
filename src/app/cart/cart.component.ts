import { Component } from '@angular/core';
import { CartItem } from '../interfaces/cart';
import { CartMang } from '../services/cart_manger';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems!: CartItem[];

  constructor(private cartMang: CartMang) {
    this.cartMang.getCartItems().subscribe((data) => {
      this.cartItems = data;
    });
  }

  adjust(isAdd: boolean, id: number) {
    this.cartMang.adjucstItemQuantity(id, isAdd);
  }
  remove(id: number) {
    this.cartMang.removeCartItem(id);
  }
}
