import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../model/user-information';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  user : UserInformation;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService) { 
      this.user = new UserInformation();
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['login']);
  }
}
