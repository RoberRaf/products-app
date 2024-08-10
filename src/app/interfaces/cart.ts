import { Product, Review } from './product';

export class CartItem implements Product {
  id!: number;
  title!: string;
  description!: string;
  category!: string;
  price!: number;
  discountPercentage!: number;
  rating!: number;
  stock!: number;
  tags!: string[];
  brand!: string;
  sku!: string;
  weight!: number;
  dimensions!: { width: number; height: number; depth: number };
  warrantyInformation!: string;
  shippingInformation!: string;
  availabilityStatus!: string;
  reviews!: Review[];
  returnPolicy!: string;
  minimumOrderQuantity!: number;
  meta!: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images!: string[];
  thumbnail!: string;
  quantity!: number;
  totlaPrice!: number;

  caclulateTotalPrice(): number {
    return this.price * this.quantity;
  }

  constructor(product: Product, quantity: number) {
    this.id = product.id;
    this.title = product.title;
    this.description = product.description;
    this.category = product.category;
    this.price = product.price;
    this.discountPercentage = product.discountPercentage;
    this.rating = product.rating;
    this.stock = product.stock;
    this.tags = product.tags;
    this.brand = product.brand;
    this.sku = product.sku;
    this.weight = product.weight;
    this.dimensions = product.dimensions;
    this.warrantyInformation = product.warrantyInformation;
    this.shippingInformation = product.shippingInformation;
    this.availabilityStatus = product.availabilityStatus;
    this.reviews = product.reviews;
    this.returnPolicy = product.returnPolicy;
    this.minimumOrderQuantity = product.minimumOrderQuantity;
    this.meta = product.meta;
    this.images = product.images;
    this.thumbnail = product.thumbnail;
    this.quantity = quantity;
    this.totlaPrice = this.caclulateTotalPrice();
  }
}
