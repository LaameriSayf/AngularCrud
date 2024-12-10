import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      this.productService.addProduct({ ...this.product });
      alert('Produit ajouté avec succès !');
      this.router.navigate(['/home']);
    }
  }
}
