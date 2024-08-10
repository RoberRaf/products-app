import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsrequestService {
  constructor(private http: HttpClient) {}

  getItemsList() {
    return this.http.get('https://dummyjson.com/products');
  }

  getItmById(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
