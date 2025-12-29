import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
