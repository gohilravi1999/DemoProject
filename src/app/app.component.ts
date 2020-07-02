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
  
<<<<<<< HEAD
  isLoggedIn =false;
constructor(private tokenStorageService : TokenStorageService,private router : Router){

}
  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if(!this.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
}
  
=======
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService,
    private router : Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }
  
}
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
