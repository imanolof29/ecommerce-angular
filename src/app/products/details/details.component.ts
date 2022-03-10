import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from "../model/product";
import { ProductsService } from "../products.service";


@Component({
    selector: 'details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit{

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

    

}