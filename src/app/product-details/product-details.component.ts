import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartMang } from '../services/cart_manger';
import { ItemsrequestService } from '../services/itemsrequest.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { DiscountPipe } from './discount.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [DiscountPipe, StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product;
  id: number;
  isLoading: boolean = true;
  bigImage: string = '';
  constructor(
    private route: ActivatedRoute,
    private itemReq: ItemsrequestService,
    private cartMng: CartMang
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  async ngOnInit() {
    this.itemReq.getItmById(this.id).subscribe((data: any) => {
      this.product = data;
      this.bigImage = this.product.images[0];
      this.isLoading = false;
    });
  }
  addCart() {
    this.cartMng.addCartITem(this.product!);
  }
  onselectImage(image: string) {
    this.bigImage = image;
  }
}
