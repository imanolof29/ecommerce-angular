import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/service/auth.service";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    
    public isAuthenticated!:boolean;

    constructor(private authService:AuthService){}

    ngOnInit(): void {
        this.authService.isAuthenticated().subscribe(value => {
            this.isAuthenticated = value
        })
    }

    logout(){
        this.authService.logout()
    }
}