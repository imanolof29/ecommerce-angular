import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ProductsComponent } from "./products/products.component";
import { DetailsComponent } from "./products/details/details.component";
import { OrdersComponent } from "./products/orders/orders.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: DetailsComponent},
    {path: 'orders', component: OrdersComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'}
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}