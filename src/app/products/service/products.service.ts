import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product";


@Injectable({
    providedIn: "root"
})

export class ProductsService{

    private url = "http://localhost:8000/api/products/";

    constructor(private httpClient:HttpClient){}

    getProducts():Observable<Product[]>{
        /*const token = this.localStorage.getLocalStorage('token')
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${token}`)*/
        console.log(this.httpClient.get(this.url));
        return this.httpClient.get<Product[]>(this.url)
    }

    getProductById(id:number):Observable<Product>{
        return this.httpClient.get<Product>(this.url+`${id}/`);
    }

    getProductByName(name:string):Observable<any>{
        return this.httpClient.get(this.url+`?title=${name}`)
    }

    postComment(comment:Comment, productId:number){
        return this.httpClient.post(this.url+`${productId}`, comment);
    }

    getStoredProducts(){
        return localStorage.getItem('product');
    }

    setStoreProduct(data:any){
        localStorage.setItem('product', data);
    }

}