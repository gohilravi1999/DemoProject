import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form : any = { };
  isSuccessful = false;
  isLoggedIn =false;
  currentUser : any ;
  id : any;
  password : any;
  constructor(private normalUserService : NormalUserServicesService,
    private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.password = this.tokenStorageService.getUser().password;
  }

  onChangePassword(){
      this.normalUserService.changePassword(this.id,this.form).subscribe(
        response => {
        console.log(response);
        this.isSuccessful=true;
        },
        error => {
          console.log(error);
        }
      );
  }
}
