import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ItemsrequestService } from '../services/itemsrequest.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: Product[] = [];
  isLoading = true;

  constructor(private itemReq: ItemsrequestService) {}
  ngOnInit() {
    this.itemReq.getItemsList().subscribe((data : any) => {
      console.log(data);
      this.products = data!.products;
      console.log('data is here', this.products);
      this.isLoading = false;
    });
  }
}
