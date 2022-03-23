import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "./model/product";
import { ProductsService } from "./service/products.service";


@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
    products!:Product[]
    isLoading:boolean = false;
    error?:{}

    constructor(private productsService:ProductsService, private router:Router){}

    ngOnInit(): void {
        this.isLoading = true
        this.productsService.getProducts().subscribe(res => {
            console.log(res)
            this.products = res
            this.isLoading = false;
        }, error => {
            this.error=error.message
            this.isLoading=false
        })
    }

    onSave(product:Product){
        const item = {
            'product': product,
            'quantity':1
        }
        this.productsService.setStoreProduct(item)
    }

    goToDetailsPage(id:number){
        this.router.navigate(['products', id])
    }

}