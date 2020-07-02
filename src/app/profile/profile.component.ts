import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NormalUserServicesService } from '../services/normal-user-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any ;
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
  }

  onEdit(){
    this.router.navigate(['editProfile'],{relativeTo : this.route});
  }

  onChangePassword(){
    this.router.navigate(['changePassword'],{relativeTo : this.route});
  }
}
