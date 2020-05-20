import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders : any;
  pendingOrder : any;
  currentIndex = -1;

  constructor(private  orderService : OrderService) { }

  ngOnInit(): void {
    this.getAllPendingOrder();
    this.getAllOrders();
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

  getAllOrders(){
    this.orderService.getOrders().subscribe(
      data => {
        this.orders = data;
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
        window.location.reload();
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
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
}
