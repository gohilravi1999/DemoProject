import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

<<<<<<< HEAD
  isAdminLoggedIn =false;
  isUserLoggedIn =false;
  hasUserRole=false;
  hasAdminRole=false;
  private roles: string[];
=======
  idAdminLoggedIn = false;
  isUserLoggedIn = false;
  hasAdminRole = false;
  hasUserRole = false;
  private roles : string[];

>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
  constructor(private router : Router) { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  isAdminLogin(){
<<<<<<< HEAD
    this.isAdminLoggedIn = !!this.getToken();

    if (this.isAdminLoggedIn) {
      const user = this.getUser();
      this.roles = user.roles;
      return this.roles.includes('ROLE_ADMIN');
  }
}

isUserLogin(){
  this.isUserLoggedIn = !!this.getToken();

    if (this.isUserLoggedIn) {
=======

    this.idAdminLoggedIn = !!this.getToken();
    if(this.idAdminLoggedIn){
      const user = this.getUser();
      this.roles = user.roles;
      return this.roles.includes('ROLE_ADMIN');
    }
  }

  isUserLogin(){
    this.isUserLoggedIn = !!this.getToken();
    if(this.isUserLoggedIn){
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
      const user = this.getUser();
      this.roles = user.roles;
      return this.roles.includes('ROLE_USER');
    }
  }

  isAdminOrUser(){
    const user = this.getUser();
    this.roles = user.roles;
    this.hasUserRole = this.roles.includes('ROLE_USER');
    this.hasAdminRole = this.roles.includes('ROLE_ADMIN');
<<<<<<< HEAD
    if(this.hasAdminRole){
      this.router.navigate(['getUser']);
    }
    if(this.hasUserRole){
      this.router.navigate(['order']);
    }
  }
}
=======

      if(this.hasAdminRole){
        this.router.navigate(['getUser']);
      }
      if(this.hasUserRole){
        this.router.navigate(['order']);
      }
  }
}
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
