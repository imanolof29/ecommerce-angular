import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../service/auth.service";
import { LoginRequest } from "../model/login-request";
import { LocalStorageService } from "src/app/shared/service/local-storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit{

    public loginForm!:FormGroup
    get f(){
        return this.loginForm.controls
    }
    public loginRequest!:LoginRequest
    public submited = false

    constructor(private authService:AuthService, private formBuilder:FormBuilder, private localStorage:LocalStorageService, private router:Router){}

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
        this.submited=true
        this.loginRequest = this.loginForm.value
        this.authService.login(this.loginRequest).subscribe(
            (res) => {
                this.localStorage.setLocalStorage('token', res.access)
                this.router.navigateByUrl('/products')
            }
        )
    }

}