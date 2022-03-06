import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "./model/login-request";
import { LoginResponse } from "./model/login-response";



@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient){}

    login(loginRequest:LoginRequest){
        return this.http.post<LoginRequest>('', loginRequest)
    }
    

    isAuthenticated():boolean{
        if(!localStorage.getItem('token')){
            return false;
        }
        return true;
    }
}