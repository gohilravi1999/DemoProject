import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username : string;
  password : string;

  constructor(private userService: UserService,
                private router : Router) { }

  ngOnInit(): void {
    
  }

  doLogin(){
  let response =  this.userService.login(this.username,this.password);
    response.subscribe(result=>{
      this.gotoUserHomePage()
    })
  }
  gotoUserHomePage(){
    this.router.navigate(['/userHome']);
  }
}
