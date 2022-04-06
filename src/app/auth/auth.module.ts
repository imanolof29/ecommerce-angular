import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";




@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule{}