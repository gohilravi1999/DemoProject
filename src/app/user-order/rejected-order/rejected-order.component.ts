import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-rejected-order',
  templateUrl: './rejected-order.component.html',
  styleUrls: ['./rejected-order.component.css']
})
export class RejectedOrderComponent implements OnInit {

  currentIndex = -1;
  currentUser : any;
  id:number;
  rejectedOrder : any;
  numberOfRejectedOrder : number;

  constructor(private tokenStorageService : TokenStorageService,
    private  orderService : OrderService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    this.getRejectedOrder();
  }

  getRejectedOrder(){
    this.orderService.getRejected(this.id).subscribe(
      data => {
        this.rejectedOrder = data;
      },
      error => {
        console.log(error);
      }
    );
    }
}
