import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../products/model/product";



@Injectable({
    providedIn: "root"
})

export class AdminService{

    private url = "http://localhost:8000/api/products/";

    constructor(private httpClient:HttpClient){}

    getProducts():Observable<any>{
        return this.httpClient.get(this.url);
    }

    getProductById(id:number):Observable<Product>{
        return this.httpClient.get<Product>(this.url+`${id}/`);
    }

    getProductByName(name:string):Observable<any>{
        return this.httpClient.get(this.url+`?title=${name}`)
    }

    editProduct(product:Product):Observable<any>{
        return this.httpClient.put<Product>(this.url+`${product.id}/`, product)
    }

    deleteProduct(id:number):Observable<any>{
        return this.httpClient.delete<Product>(this.url+`${id}/`)
    }

}