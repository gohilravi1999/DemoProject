import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private adminService : AdminServiceService,
                private router : Router) { }

  ngOnInit(){
  }

  onSubmit(){
    this.adminService.addNewProduct(this.form).subscribe(
      response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
        window.alert("Product added Successfully!!");
        window.location.reload();
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
