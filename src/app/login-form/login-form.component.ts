import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import { TokenStorageService } from '../services/token-storage.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form : any ={}
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
<<<<<<< HEAD
  hasAdminRole = false;
  hasUserRole = false;

  constructor(private authenticationService: AuthenticationService,
     private tokenStorage: TokenStorageService,private router : Router) { }
=======

  constructor(private authenticationService: AuthenticationService,
     private tokenStorage: TokenStorageService) { }
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.tokenStorage.isAdminOrUser();
    }
  }

  onSubmit() {
    this.authenticationService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
<<<<<<< HEAD
        this.reloadPage();
=======
        this.roles = this.tokenStorage.getUser().roles;
        
       this.reloadPage();
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
