import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders : any;
  rejectedOrder : any;
  pendingOrder : any;
  currentIndex = -1;
  constructor(private  orderService : OrderService,
                private router : Router) { }

  ngOnInit(): void {
    this.getAllPendingOrder();
    this.getAllApprovedOrders();
    this.getAllRejectedOrders();
  }

  getAllPendingOrder(){
    this.orderService.getAll().subscribe(
      data => {
        this.pendingOrder = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllApprovedOrders(){
    this.orderService.getAllApproved().subscribe(
      data => {
        this.orders = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllRejectedOrders(){
    this.orderService.getAllReject().subscribe(
      data => {
        this.rejectedOrder = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onApproveOrder(order : any){
    this.orderService.onApprove(order).subscribe(
      data => {
        console.log(data);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(() =>{
          this.router.navigate([currentUrl]);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  onRejectOrder(order : any){
    this.orderService.onReject(order).subscribe(
      data => {
        console.log(data);
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(() =>{
          this.router.navigate([currentUrl]);
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
