import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth/guards/auth.guard";


const routes: Routes = [
    {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)},
    {
        path: 'products', 
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        canActivate: [AuthGuard]
    },
    {path: '', component: HomeComponent},
    {
        path: '**',
        redirectTo: 'auth'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}