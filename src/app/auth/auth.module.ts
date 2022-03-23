import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule{}