import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-public-homepage',
  templateUrl: './public-homepage.component.html',
  styleUrls: ['./public-homepage.component.css']
})
export class PublicHomepageComponent implements OnInit {

  content: string;
  isLoggedIn = false;
  username : string;

  constructor(private userService: UserService,
    public tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.username = this.tokenStorageService.getUser().username;
  }
  
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
   }
}

