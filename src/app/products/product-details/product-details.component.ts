import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../model/product";
import { ProductsService } from "../service/products.service";


@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
    id!:number
    product!:Product

    constructor(private route:ActivatedRoute, private productsService:ProductsService){}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.productsService.getProductById(this.id).subscribe(res => {
            console.log(res)
            this.product = res
        })
    }

    isInStock():boolean{
        if(this.product.stock<=0){
            return false
        }
        return true
    }
}