import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { NormalUserServicesService } from '../services/normal-user-services.service';
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any ;
<<<<<<< HEAD
  user : any ;

  constructor(private tokenStorageService : TokenStorageService,
              private normalUserService : NormalUserServicesService,
              private router : Router ,
              private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.normalUserService.getUserById(this.tokenStorageService.getUser().id)
              .subscribe(
                response => {
                  this.currentUser = response
            });
=======

  constructor(private tokenStorageService : TokenStorageService,
                private router : Router ,
                private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
  }

  onEdit(){
    this.router.navigate(['editProfile'],{relativeTo : this.route});
  }

  onChangePassword(){
    this.router.navigate(['changePassword'],{relativeTo : this.route});
  }
}
