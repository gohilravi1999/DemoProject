import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-approved-order',
  templateUrl: './approved-order.component.html',
  styleUrls: ['./approved-order.component.css']
})
export class ApprovedOrderComponent implements OnInit {

  currentIndex = -1;
  currentUser : any;
  id:number;
  approvedOrder : any;
  numberOfApprovedOrder : number;

  constructor(private tokenStorageService : TokenStorageService,
              private  orderService : OrderService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.id = this.currentUser.id;
    this.getApprovedOrder();
  }

  getApprovedOrder(){
    this.orderService.getApproved(this.id).subscribe(
      data => {
        this.approvedOrder = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
