import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-product-list',
  templateUrl: './get-product-list.component.html',
  styleUrls: ['./get-product-list.component.css']
})
export class GetProductListComponent implements OnInit {

  form : any = {};
  isSuccessful=false;
  isFailed=false;
  activeProducts: any;
  InactiveProducts : any;
  currentProduct = null;
  currentInactiveProduct = null;
  currentIndex = -1;
  errorMessage='';
  editedProduct:any;

  constructor(private adminService : AdminServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.getListOfActiveProduct();
    this.getListOfInActiveProduct();
  }

  getListOfActiveProduct(){
    this.adminService.listOfActiveProduct()
      .subscribe(
        data => {
          this.activeProducts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
        
  }

  getListOfInActiveProduct(){
    this.adminService.listOfInActiveProduct()
      .subscribe(
        data => {
          this.InactiveProducts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  makeInactiveProduct(product:any){
    this.adminService.makeInactiveProduct(product)
    .subscribe(
      response=>{
        console.log(response);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  makeActiveProduct(product:any){
    this.adminService.makeActiveProduct(product)
    .subscribe(
      response=>{
        console.log(response);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  onEditActive(id){
    console.log(id);
      this.adminService.getProduct(id).subscribe(
        data => {
          this.editedProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  onEditProduct(){
    console.log(this.form);
     this.adminService.editProduct(this.editedProduct.id,this.editedProduct)
    .subscribe(
      response=>{
        window.alert("Product successfully Edited!!")
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
      },
      err=>{
        this.isFailed=true;
        this.errorMessage = err.error.message;
        console.log(err);
      });
  }

  onCancel(){
    this.editedProduct=null;
  }
}
