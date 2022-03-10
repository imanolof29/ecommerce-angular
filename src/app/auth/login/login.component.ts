import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";
import { LoginRequest } from "../model/login-request";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    public loginForm!:FormGroup
    get f(){
        return this.loginForm.controls
    }
    public loginRequest!:LoginRequest

    constructor(private authService:AuthService, private formBuilder:FormBuilder){}

    ngOnInit(): void {
        this.buildLoginForm()
    }

    buildLoginForm(){
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control(null, [Validators.required]),
            password: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)])
        })
    }

    login(){
        this.loginRequest = this.loginForm.value
        this.authService.login(this.loginRequest).subscribe(
            (res) => {
                console.log(res)
            }
        )
    }

}