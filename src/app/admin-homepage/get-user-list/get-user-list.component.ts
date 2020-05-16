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
  InactiveUsers : any;
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
          this.InactiveUsers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    window.location.reload();
    this.getListOfActiveUser();
    this.getListOfInActiveUser();
    this.currentUser = null;
    this.currentIndex = -1;
  }

  setActiveUser(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }
  setInActiveUser(user, index) {
    this.currentInactiveUser = user;
    this.currentIndex = index;
  }

  makeInactive(){
    this.adminService.makeInactive(this.currentUser)
    .subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    );
  }

  makeActive(){
    this.adminService.makeActive(this.currentInactiveUser)
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
