import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartItem } from './../interfaces/cart';

@Injectable({ providedIn: 'root' })
export class CartMang {
  private prodOne: Product = {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
    category: 'beauty',
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ['beauty', 'mascara'],
    brand: 'Essence',
    sku: 'RCH45Q1A',
    weight: 2,
    dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
    warrantyInformation: '1 month warranty',
    shippingInformation: 'Ships in 1 month',
    availabilityStatus: 'Low Stock',
    reviews: [
      {
        rating: 2,
        comment: 'Very unhappy with my purchase!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'John Doe',
        reviewerEmail: 'john.doe@x.dummyjson.com',
      },
      {
        rating: 2,
        comment: 'Not as described!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Nolan Gonzalez',
        reviewerEmail: 'nolan.gonzalez@x.dummyjson.com',
      },
      {
        rating: 5,
        comment: 'Very satisfied!',
        date: '2024-05-23T08:56:21.618Z',
        reviewerName: 'Scarlett Wright',
        reviewerEmail: 'scarlett.wright@x.dummyjson.com',
      },
    ],
    returnPolicy: '30 days return policy',
    minimumOrderQuantity: 24,
    meta: {
      createdAt: '2024-05-23T08:56:21.618Z',
      updatedAt: '2024-05-23T08:56:21.618Z',
      barcode: '9164035109868',
      qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
    },
    images: [
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
  };
  private cartItems = new BehaviorSubject<CartItem[]>([
    // new CartItem(this.prodOne, 1),
  ]);

  private cartTotalPrice = new BehaviorSubject<number>(0);

  getCartItems() {
    return this.cartItems.asObservable();
  }

  getCartTotalPrice() {
    return this.cartTotalPrice.asObservable();
  }

  addCartITem(item: Product) {
    const cartI = new CartItem(item, 1);
    console.log(cartI.id);
    const possibleExist =
      this.cartItems.value.find((item) => item.id === cartI.id) !== undefined;

    if (possibleExist) {
      this.updateExistingCartITem(
        cartI,
        this.cartItems.value.findIndex((item) => item.id === cartI.id)
      );
    } else {
      this.addNewCartItem(cartI);
    }
    this.calculateCartTotalPrice();
    console.log('Product added to cart');
  }

  private addNewCartItem(item: CartItem) {
    item.totlaPrice = this.calculateItemTotalPrice(item);
    this.cartItems.next([...this.cartItems.value, item]);
  }

  private updateExistingCartITem(item: CartItem, index: number) {
    const tempCartITems = this.cartItems.value;
    const tempItem = tempCartITems[index];
    if (tempItem.quantity >= item.stock) {
      alert('Max stock reached');
      return;
    }
    tempItem.quantity += item.quantity;
    tempItem.totlaPrice = this.calculateItemTotalPrice(tempItem);
    tempCartITems[index] = tempItem;
    this.cartItems.next(tempCartITems);
  }

  private calculateItemTotalPrice(item: CartItem): number {
    return item.price * item.quantity;
  }

  private calculateCartTotalPrice(): number {
    let tempTotal = 0;
    this.cartItems.value.forEach((item, i) => (tempTotal += item.totlaPrice));
    this.cartTotalPrice.next(tempTotal);
    return tempTotal;
  }

  removeCartItem(id: number) {
    const tempCartITems = this.cartItems.value;
    const index = tempCartITems.findIndex((item) => item.id === id);
    tempCartITems.splice(index, 1);
    this.cartItems.next(tempCartITems);
    this.calculateCartTotalPrice();
  }

  adjucstItemQuantity(id: number, isAdd: boolean) {
    const tempCartITems = this.cartItems.value;
    const item = tempCartITems.find((item) => item.id === id);
    if (!item) return;
    if (isAdd) {
      item!.quantity < item!.stock ? item!.quantity++ : item?.quantity;
    } else {
      item!.quantity > 1 ? item!.quantity-- : item?.quantity;
    }
    item!.totlaPrice = this.calculateItemTotalPrice(item);
    tempCartITems[tempCartITems.indexOf(item)] = item!;
    this.cartItems.next(tempCartITems);
    this.calculateCartTotalPrice();
  }
}
