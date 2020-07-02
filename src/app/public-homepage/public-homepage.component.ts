import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { UserService } from '../services/user.service';
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-public-homepage',
  templateUrl: './public-homepage.component.html',
  styleUrls: ['./public-homepage.component.css']
})
export class PublicHomepageComponent implements OnInit {

<<<<<<< HEAD
  
  private roles: string[];
  isLoggedIn = false;
  hasAdminRole = false;
  hasUserRole = false;
  username: string;

  constructor(public tokenStorageService: TokenStorageService,
    private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.username=this.tokenStorageService.getUser().username;
  }

  logout() {
   this.tokenStorageService.signOut();
   window.location.reload();
  }
=======
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
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
}

