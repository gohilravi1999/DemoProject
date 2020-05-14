import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser : any ;

  constructor(private tokenStorageService : TokenStorageService,
                private router : Router ,
                private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }

  onEdit(){
    this.router.navigate(['editProfile'],{relativeTo : this.route});
  }
}
