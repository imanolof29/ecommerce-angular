import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../service/auth.service";
import { SignupRequest } from "../../model/signup-request";

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
    public signupForm!:FormGroup
    get f(){
        return this.signupForm.controls
    }
    public signupRequest!:SignupRequest
    public submited = false

    constructor(private authService:AuthService, private formBuilder:FormBuilder){}

    ngOnInit(): void {
        this.buildLoginForm()
    }

    buildLoginForm(){
        this.signupForm = this.formBuilder.group({
            firstName: this.formBuilder.control(null, [Validators.required]),
            lastName: this.formBuilder.control(null, [Validators.required]),
            username: this.formBuilder.control(null, [Validators.required]),
            email: this.formBuilder.control(null, [Validators.required]),
            password: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)]),
            password2: this.formBuilder.control(null, [Validators.required, Validators.minLength(5)])
        })
    }

    signup(){
        this.submited=true
        this.signupRequest = this.signupForm.value
        this.authService.signup(this.signupRequest).subscribe(
            (res) => {
                console.log(res)
            }
        )
    }
}