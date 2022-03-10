import { Component, OnInit } from "@angular/core";
import { ProductItem } from "../model/product-item";
import { ProductsService } from "../products.service";

@Component({
    selector: 'orders',
    templateUrl: './orders.component.html',
})

export class OrdersComponent implements OnInit{

    items!:any

    constructor(private productsService:ProductsService){}

    ngOnInit(): void {
        this.items = this.productsService.getStoredProducts()
    }


}