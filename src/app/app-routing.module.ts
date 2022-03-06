import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { ProductsComponent } from "./products/products.component";
import { DetailsComponent } from "./products/details/details.component";


const routes: Routes = [
    {path: 'products', component: ProductsComponent, children: [
        {
            path:':id',
            component: DetailsComponent
        }
    ]},
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}