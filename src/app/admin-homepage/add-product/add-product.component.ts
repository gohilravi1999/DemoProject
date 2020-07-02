import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form : any = { };
  isSuccessful = false;
  isFailed=false;
  errorMessage = '';
  isActiveForm = true;
  currentUser : any;

  constructor(private adminService : AdminServiceService,
              private tokenStorageService : TokenStorageService,
                private router : Router) { }

  ngOnInit(){
    this.currentUser = this.tokenStorageService.getUser();
  }

  onSubmit(){
    this.adminService.addNewProduct(this.form).subscribe(
      response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
<<<<<<< HEAD
        window.alert("Product added Successfully");
        this.router.navigateByUrl('/' , {skipLocationChange:true}).then(() =>{
          this.router.navigate(['/getProduct']);
        });
=======
        window.alert("Product added Successfully!!");
        window.location.reload();
>>>>>>> 2b42c4591d67d19dfd1e03d6fc5e00cc455118f0
      },
      error => {
        console.log(error);
        this.isFailed=true;
        this.errorMessage = error.error.message;
      });
  }
  onCancel(){
    this.isActiveForm=false;
    this.router.navigate(['/getProduct']);
  }
}
