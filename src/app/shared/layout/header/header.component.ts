import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/service/auth.service";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    
    isAuthenticated!:boolean;

    user!:string

    constructor(private authService:AuthService){}

    ngOnInit(): void {
        this.isAuthenticated=this.authService.isAuthenticated()
        this.user = this.authService.getCurrentUser()
        //this.isAuthenticated = this.authService.isAuthenticated()
    }
}