import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-canceled-order',
  templateUrl: './canceled-order.component.html',
  styleUrls: ['./canceled-order.component.css']
})
export class CanceledOrderComponent implements OnInit {

  currentIndex = -1;
  currentUser : any;
  id:number;
  canceledOrder : any;
  
  constructor(private tokenStorageService : TokenStorageService,
    private  orderService : OrderService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    this.getCanceledOrder();
  }

  getCanceledOrder(){
    this.orderService.getCanceled(this.id).subscribe(
      data => {
        this.canceledOrder = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
