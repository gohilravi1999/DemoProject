import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Order } from './order.model';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { OrderInfo } from '../OrderInfo.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  activeProducts: any;
  isActivedForm=true;
  currentIndex = -1;
  form : any = {};
  orderedProduct : any;
  currentUser : any;
  order : Order;
  id:number;
  isFailed = true;
  errorMessage = '';
  count : number= 0;
  orderInfo : OrderInfo;

  orderForm : FormGroup;
  constructor(private adminService : AdminServiceService,
              private tokenStorageService : TokenStorageService,
              private orderService : OrderService,
              private router : Router) { 
                this.orderInfo = new OrderInfo();
              }

  ngOnInit(): void {
    this.getListOfActiveProduct();
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    this.initForm();
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
        this.form.name = this.orderedProduct.name;
        this.isActivedForm=true;
        console.log(data);
        if(this.count ===0 ){
          this.initForm();
          this.count++;
        }
       else{
         this.onAddProduct(this.form.name);
       }
      },
      error => {
        console.log(error);
      });
  }

onCancel(){
  this.isActivedForm=false;
  this.router.navigate(['/order']);
}

private initForm(){
let userAddress = '';
let userPincode = '';
let userMobile = '';
let productQuantity = '';
let productInfo = new FormArray([]);
productInfo.push(new FormGroup({
  'name' : new FormControl(this.form.name),
  'quantity' : new FormControl(productQuantity,[Validators.required,Validators.pattern(/^[0-9]{0,4}$/)])
}));

  this.orderForm = new FormGroup({
    'address' : new FormControl(userAddress),
    'pincode' : new FormControl(userPincode,[Validators.required,Validators.pattern(/^[0-9]{6,6}$/)]),
    'mobileNumber' : new FormControl(userMobile,[Validators.required,Validators.pattern(/^[0-9]{10,10}$/)]),
    'productInfo': productInfo
  })
}

onSubmit(){
  console.log(this.orderForm.get('productInfo').value);
  this.orderInfo.address = this.orderForm.get('address').value;
  this.orderInfo.pincode = this.orderForm.get('pincode').value;
  this.orderInfo.mobileNumber = this.orderForm.get('mobileNumber').value;
  this.orderInfo.productInfo = this.orderForm.get('productInfo').value;
  console.log(this.orderInfo);
  this.orderService.addOrder(this.id,this.orderInfo).subscribe(
    data => {
      this.isFailed =false;
      console.log(data);
      this.router.navigate(['/getUserOrder/pendingOrder']);
    },
    error => {
      this.isFailed= true;
      console.log(error);
    });
}

onAddProduct(name:any){
  (<FormArray>this.orderForm.get('productInfo')).push(
    new FormGroup({
      'name' : new FormControl(name),
      'quantity' : new FormControl()
    })
  );
}

onDeleteProduct(index:number){
  (<FormArray>this.orderForm.get('productInfo')).removeAt(index);
}
  
}
