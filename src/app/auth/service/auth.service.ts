import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoginRequest } from "../model/login-request";
import { LoginResponse } from "../model/login-response";
import { SignupRequest } from "../model/signup-request";



@Injectable({
    providedIn:'root'
})
export class AuthService{

    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor(private http:HttpClient){}

    login(loginRequest:LoginRequest){
        return this.http.post<LoginResponse>('http://localhost:8000/api/auth/token/', loginRequest)
    }

    signup(signupRequest:SignupRequest){
        return this.http.post<SignupRequest>('http://localhost:8000/api/auth/create/', signupRequest)
    }

    logout(){
        sessionStorage.removeItem('token')
    }
    
    isAuthenticated():BehaviorSubject<boolean>{
        if(sessionStorage.getItem('token')){
            this.isLoggedIn.next(true)
        }
        return this.isLoggedIn;
    }
}