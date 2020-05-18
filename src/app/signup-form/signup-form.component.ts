import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form : any = { };
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authenticationService : AuthenticationService,
                private router : Router) { 
     
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authenticationService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSignUpFailed = false;
        this.router.navigate(['../login']);
        window.alert("Sign up Successfull");
      },
      err => {
        this.isSignUpFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
