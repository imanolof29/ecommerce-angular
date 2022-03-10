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

    getProductById(id:number):Observable<any>{
        console.log(this.url+id)
        return this.httpClient.get(this.url+`/${id}/`);
    }

    getStoredProducts(){
        return localStorage.getItem('product');
    }

    setStoreProduct(data:any){
        const jsonData = JSON.stringify(data)
        localStorage.setItem('product', jsonData);
    }

}