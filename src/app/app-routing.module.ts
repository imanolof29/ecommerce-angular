import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./products/cart/cart.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartComponent},
    {path:'admin', component: AdminComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}