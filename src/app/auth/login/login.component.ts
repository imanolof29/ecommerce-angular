import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../auth.service";
import { LoginRequest } from "../model/login-request";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    public loginRequest!:LoginRequest

    constructor(private authService:AuthService){}

    ngOnInit(): void {
        
    }

    login(){
        console.log(this.loginRequest.email)
        console.log(this.loginRequest.password)
    }
}