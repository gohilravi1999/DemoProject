import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

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
  isActivedForm = true;
  currentUser : any ;
  id : any;
  constructor(private normalUserService : NormalUserServicesService,
                private tokenStorageService : TokenStorageService,
                private router : Router) { }

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.currentUser = this.tokenStorageService.getUser();
    this.normalUserService.getUserById(this.id).subscribe(
    response =>{
      this.form = response;
    }
    );
  }

  onEditProfile(){
    
    this.normalUserService.updateProfile(this.id,this.form).subscribe(
      response => {
        console.log(response);
        window.alert("User updated successfully!!");
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
          this.router.navigate(['/profile']);
        });
      },
      error => {
        console.log(error);
        window.alert(error.error.message);
      });
  }

  onCancel(){
    this.isActivedForm=false;
    this.router.navigate(['/profile']);
  }
}
