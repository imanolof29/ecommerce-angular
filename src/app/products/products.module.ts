import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsRoutingModule } from "./products-routing.module";




@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailsComponent
    ],
    imports: [
        ProductsRoutingModule,
    ]
})
export class ProductsModule{}