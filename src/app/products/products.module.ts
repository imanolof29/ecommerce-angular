import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsRoutingModule } from "./products-routing.module";




@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
    ]
})
export class ProductsModule{}