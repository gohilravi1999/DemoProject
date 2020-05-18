import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-get-user-list',
  templateUrl: './get-user-list.component.html',
  styleUrls: ['./get-user-list.component.css']
})
export class GetUserListComponent implements OnInit {

  activeUsers: any;
  inactiveUsers : any;
  inActiveUser : any;
  currentUser = null;
  currentInactiveUser = null;
  currentIndex = -1;
  isActive = false;

  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
    this.getListOfActiveUser();
    this.getListOfInActiveUser();
  }

  getListOfActiveUser(){
    this.adminService.listOfActiveUser()
      .subscribe(
        data => {
          this.activeUsers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
        
  }

  getListOfInActiveUser(){
    this.adminService.listOfInActiveUser()
      .subscribe(
        data => {
          this.inactiveUsers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  makeInactive(user : any){
    this.adminService.makeInactive(user)
    .subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

  makeActive(user : any){
    this.adminService.makeActive(user)
    .subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
