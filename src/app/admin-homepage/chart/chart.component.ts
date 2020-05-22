import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  users : any;
  chartData :any;

  public barChartOptions = {
    scaleShowVerticalLines:false,
    responsive:true
  };

  
  public barChartLabels ;
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public barChartData = [{data :[this.chartData], label :'Order'}];

  constructor(private adminService : AdminServiceService,
    private orderService : OrderService) {
   }

  ngOnInit(): void {
    this.findAllUser();
    //this.findNumberOfOrder();
  }
  
  findAllUser(){
    this.adminService.listOfAllUser().subscribe(
      data=>{
        this.users = data;
        this.barChartLabels = data.map(a=>a.username);
        console.log(this.barChartLabels);
        console.log(this.users);
        this.orderService.getOrderByUser(this.users).subscribe(
          data=>{
            console.log(data);
           this.chartData = data;
           console.log(this.chartData);
          },
          error=>{
            console.log(error);
          }
        );
      },
      error=>{
        console.log(error);
      }
    );
   }

  //  findNumberOfOrder(){
  //   this.orderService.getOrderByUser(this.users).subscribe(
  //     data=>{
  //       console.log(data);
  //      this.chartData = data;
  //     },
  //     error=>{
  //       console.log(error);
  //     }
  //   );
  // }


}
