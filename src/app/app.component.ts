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
  