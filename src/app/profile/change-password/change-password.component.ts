import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

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
<<<<<<< HEAD
  isActivedForm=true;
  constructor(private normalUserService : NormalUserServicesService,
    private tokenStorageService : TokenStorageService,
    private router : Router) { }
=======
  constructor(private normalUserService : NormalUserServicesService,
    private tokenStorageService : TokenStorageService) { }
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.password = this.tokenStorageService.getUser().password;
  }

  onChangePassword(){
      this.normalUserService.changePassword(this.id,this.form).subscribe(
        response => {
        console.log(response);
<<<<<<< HEAD
        this.tokenStorageService.signOut();
        window.alert("Password is changed successfully!!Login with new password");
        window.location.reload();
=======
        this.isSuccessful=true;
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
        },
        error => {
          console.log(error);
        }
      );
  }
<<<<<<< HEAD
  onCancel(){
    this.isActivedForm=false;
    this.router.navigate(['/profile']);
  }
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
}
