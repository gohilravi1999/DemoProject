import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

  currentIndex = -1;
  currentUser : any;
  id:number;
  pendingOrder : any;
  editedOrder : any;
  cancelOrder : any;

  constructor(private tokenStorageService : TokenStorageService,
    private  orderService : OrderService,
    private router : Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    this.getPendingOrder();
  }

  getPendingOrder(){
    this.orderService.getPending(this.id).subscribe(
      data => {
        this.pendingOrder = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onEditOrder(id){
    console.log(id);
      this.orderService.getOrder(id).subscribe(
        data => {
          this.editedOrder = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  onEditActiveOrder(){
    this.orderService.editOrder(this.editedOrder.id,this.editedOrder).subscribe(
      data => {
        console.log(data);
        window.alert("Edited successfully!!");
<<<<<<< HEAD
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/getUserOrder/pendingOrder']);
      });
=======
        window.location.reload();
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
      },
      error => {
        console.log(error);
      }
    );
  }

  onCancelOrder(order:any){
    this.orderService.onCancelOrder(order).subscribe(
      data => {
        console.log(data);
<<<<<<< HEAD
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/getUserOrder/canceledOrder']);
      });
=======
        window.location.reload();
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
      },
      error => {
        console.log(error);
      }
    );
  }

  onCancel(){
    this.editedOrder=null;
  }

}
