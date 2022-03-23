import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "../model/login-request";
import { LoginResponse } from "../model/login-response";
import { SignupRequest } from "../model/signup-request";



@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(private http:HttpClient){}

    login(loginRequest:LoginRequest){
        return this.http.post<LoginResponse>('http://localhost:8000/api/auth/token/', loginRequest)
    }

    signup(signupRequest:SignupRequest){
        return this.http.post<SignupRequest>('http://localhost:8000/api/auth/create/', signupRequest)
    }
    
    isAuthenticated():boolean{
        if(!sessionStorage.getItem('token')){
            return false;
        }
        return true;
    }

    getCurrentUser(){
        return "Imanol";
    }
}