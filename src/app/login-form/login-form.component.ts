import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

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
  hasAdminRole = false;
  hasUserRole = false;

  constructor(private authenticationService: AuthenticationService,
     private tokenStorage: TokenStorageService,private router : Router) { }

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
        this.reloadPage();
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
}