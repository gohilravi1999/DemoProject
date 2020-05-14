import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  content='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserHomepage().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
