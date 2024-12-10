import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: AllproductsComponent },
  { path: 'products/edit', component: EditProductComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
