import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form : any = { };
  isSuccessful = false;
  isFailed=false;

  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.addNewProduct(this.form).subscribe(
      response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
      },
      error => {
        console.log(error);
        this.isFailed=true;
      });
  }
}
