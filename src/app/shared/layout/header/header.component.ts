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

    constructor(private authService:AuthService){}

    ngOnInit(): void {
        this.isAuthenticated=true
        //this.isAuthenticated = this.authService.isAuthenticated()
    }
}