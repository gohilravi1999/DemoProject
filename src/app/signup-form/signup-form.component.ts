import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form : any = { };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authenticationService : AuthenticationService) { 
     
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authenticationService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.isSignUpFailed = true;
      }
    );
  }
}
