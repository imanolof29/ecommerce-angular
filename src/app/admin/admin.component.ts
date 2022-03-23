import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from "../products/model/product";
import { AdminService } from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public editProductForm!:FormGroup

  get f(){
    return this.editProductForm.controls
}

  private product!:Product

  constructor(private formBuilder:FormBuilder, private adminService:AdminService) {}

  ngOnInit(): void {
    this.adminService.getProductById(1).subscribe(res => {
      console.log(res)
      this.product = res
    })
  }



  buildForm(){
    this.editProductForm = this.formBuilder.group({
      title: this.formBuilder.control(this.product.title),
      description: this.formBuilder.control(this.product.description),
      price: this.formBuilder.control(this.product.price),
      stock: this.formBuilder.control(this.product.stock)
    })
  }

  save(){}

}
