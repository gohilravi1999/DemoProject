import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

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

  constructor(private adminService : AdminServiceService) { }

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

  refreshList() {
    window.location.reload();
    this.getListOfActiveProduct();
    this.getListOfInActiveProduct();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setActiveProduct(product, index) {
    this.currentProduct = product;
    this.currentIndex = index;
  }
  setInActiveProduct(product, index) {
    this.currentInactiveProduct = product;
    this.currentIndex = index;
  }

  makeInactiveProduct(){
    this.adminService.makeInactiveProduct(this.currentProduct)
    .subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

  makeActiveProduct(){
    this.adminService.makeActiveProduct(this.currentInactiveProduct)
    .subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

  onEditInactive(){
    this.adminService.editProduct(this.currentInactiveProduct.id,this.form)
    .subscribe(
      response=>{
        console.log(response);
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }

  onEditActive(){
    this.adminService.editProduct(this.currentProduct.id,this.form)
    .subscribe(
      response=>{
        console.log(response);
        window.location.reload();
      },
      error=>{
        console.log(error);
      }
    );
  }
}
