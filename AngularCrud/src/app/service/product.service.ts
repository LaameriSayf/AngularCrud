import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Produit A', price: 100, quantity: 10 },
    { id: 2, name: 'Produit B', price: 200, quantity: 5 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
