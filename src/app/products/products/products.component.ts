import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];

  id = 0;
  name = '';
  price = 0;
  stock = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct({
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock,
    });

    this.id = 0;
    this.name = '';
    this.price = 0;
    this.stock = 0;
  }

  deleteProduct(index: number) {
    this.productService.deleteProduct(index);
  }
}
