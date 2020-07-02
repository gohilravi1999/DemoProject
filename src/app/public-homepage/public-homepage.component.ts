import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-public-homepage',
  templateUrl: './public-homepage.component.html',
  styleUrls: ['./public-homepage.component.css']
})
export class PublicHomepageComponent implements OnInit {

  
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
}

