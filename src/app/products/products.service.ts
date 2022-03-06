import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./model/product";


@Injectable({
    providedIn: "root"
})

export class ProductsService{

    private url = "http://localhost:8000/api/products/";

    constructor(private httpClient:HttpClient){}

    getProducts():Observable<any>{
        return this.httpClient.get(this.url);
    }

}