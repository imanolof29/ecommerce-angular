import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthGuardService } from '../auth/service/auth-guard.service';

const routes:Routes = [
  {path:'products', component: ProductsComponent, canActivate: [AuthGuardService]},
  {path:'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuardService]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
