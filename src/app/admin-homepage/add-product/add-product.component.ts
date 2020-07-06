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
  SelectedImage : File;

  constructor(private adminService : AdminServiceService,
              private tokenStorageService : TokenStorageService,
                private router : Router) { }

  ngOnInit(){
    this.currentUser = this.tokenStorageService.getUser();
  }

  onFileSelect(event){
    this.SelectedImage = event.target.files[0];
  }

  onSubmit(){
    const uploadFormData = new FormData();
    uploadFormData.append('image', this.SelectedImage);
    uploadFormData.append('product', JSON.stringify(this.form));
    this.adminService.addNewProduct(uploadFormData).subscribe(
      response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
        window.alert("Product added Successfully");
        this.router.navigateByUrl('/' , {skipLocationChange:true}).then(() =>{
          this.router.navigate(['/getProduct']);
        });
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
