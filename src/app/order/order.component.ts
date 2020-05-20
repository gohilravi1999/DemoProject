import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Order } from './order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  activeProducts: any;
  currentIndex = -1;
  form : any = {};
  orderedProduct : any;
  currentUser : any;
  order : Order;
  id:number;
  isFailed = true;
  errorMessage = '';

  constructor(private adminService : AdminServiceService,
              private tokenStorageService : TokenStorageService,
              private orderService : OrderService) { }

  ngOnInit(): void {
    this.getListOfActiveProduct();
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
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

  setActiveProduct(id:number){
    this.adminService.getProduct(id).subscribe(
      data => {
        this.orderedProduct = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  onOrder(){
    console.log(this.form);
    if(this.orderedProduct.name === this.form.name)
    {
      this.orderService.addOrder(this.id,this.form).subscribe(
        data => {
          this.isFailed =false;
          console.log(data);
        },
        error => {
          this.isFailed= true;
          console.log(error);
        });
      }
    else{
      this.isFailed = true;
      this.errorMessage='Product name does not match';
      window.alert(this.errorMessage);
    }    
}
}
