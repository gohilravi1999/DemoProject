import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})
export class AppComponent {
  
  private roles: string[];
  isLoggedIn = false;
  hasAdminRole = false;
  hasUserRole = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService,
    private router : Router, private location:Location) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.hasUserRole = this.roles.includes('ROLE_USER');
      this.hasAdminRole = this.roles.includes('ROLE_ADMIN');

      if(this.hasAdminRole){
        this.router.navigate(['getUser']);
      }
      if(this.hasUserRole){
        this.router.navigate(['order']);
      }
      this.username = user.username;
    }
  }

  logout() {
   this.tokenStorageService.signOut();
   window.location.reload();
  }
}
