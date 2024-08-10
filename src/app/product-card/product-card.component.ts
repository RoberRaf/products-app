import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product';
import { DiscountPipe } from '../product-details/discount.pipe';
import { CartMang } from '../services/cart_manger';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StarRatingComponent, DiscountPipe, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product?: Product;

  constructor(private cartMng: CartMang) {}

  addCart() {
    this.cartMng.addCartITem(this.product!);
  }
}
