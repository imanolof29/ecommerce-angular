import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "../model/login-request";



@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient){}

    login(loginRequest:LoginRequest){
        return this.http.post<LoginRequest>('http://localhost:8000/api/auth/token/', loginRequest)
    }
    

    isAuthenticated():boolean{
        if(!localStorage.getItem('token')){
            return false;
        }
        return true;
    }
}