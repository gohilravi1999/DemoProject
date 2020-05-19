import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  form : any = { };
  isSuccessful = false;
  isLoggedIn =false;
  isFailed = false;
  currentUser : any ;
  id : any;
  constructor(private normalUserService : NormalUserServicesService,
                private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.currentUser = this.tokenStorageService.getUser();
  }

  onEditProfile(){
    
    this.normalUserService.updateProfile(this.id,this.form).subscribe(
      response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
      },
      error => {
        console.log(error);
        this.isFailed=true;
      });
  }
}
