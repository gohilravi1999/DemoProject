import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

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
  isActivedForm=true;
  constructor(private normalUserService : NormalUserServicesService,
    private tokenStorageService : TokenStorageService,
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.password = this.tokenStorageService.getUser().password;
  }

  onChangePassword(){
      this.normalUserService.changePassword(this.id,this.form).subscribe(
        response => {
        console.log(response);
        this.tokenStorageService.signOut();
        window.alert("Password is changed successfully!!Login with new password");
        window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }
  onCancel(){
    this.isActivedForm=false;
    this.router.navigate(['/profile']);
  }
}
