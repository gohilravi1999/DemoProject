import { Component, OnInit } from '@angular/core';
import { NormalUserServicesService } from 'src/app/services/normal-user-services.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

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
<<<<<<< HEAD
  isActivedForm = true;
  currentUser : any ;
  id : any;
  constructor(private normalUserService : NormalUserServicesService,
                private tokenStorageService : TokenStorageService,
                private router : Router) { }
=======
  currentUser : any ;
  id : any;
  constructor(private normalUserService : NormalUserServicesService,
                private tokenStorageService : TokenStorageService) { }
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.currentUser = this.tokenStorageService.getUser();
<<<<<<< HEAD
    this.normalUserService.getUserById(this.id).subscribe(
    response =>{
      this.form = response;
    }
    );
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
  }

  onEditProfile(){
    
    this.normalUserService.updateProfile(this.id,this.form).subscribe(
      response => {
        console.log(response);
<<<<<<< HEAD
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
=======
        this.isSuccessful=true;
        this.isFailed=false;
      },
      error => {
        console.log(error);
        this.isFailed=true;
      });
  }
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
}
