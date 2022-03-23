import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../service/products.service";

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit{

    items!:any

    constructor(private productsService:ProductsService){}

    ngOnInit(): void {
        this.items = this.productsService.getStoredProducts()
    }


}