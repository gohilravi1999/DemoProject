import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { OrderService } from 'src/app/services/order.service';
import { ChartDataSets } from 'chart.js';

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
  barData :any =[];
  
  public barChartData : ChartDataSets[] = [
    { data: this.barData, label: 'Orders per user' },
  ];

  constructor(private adminService : AdminServiceService,
    private orderService : OrderService) {
   }

  ngOnInit(): void {
    this.findAllUser();
  }
  
  findAllUser(){
    this.adminService.listOfAllUser().subscribe(
      data=>{
        this.users = data;
        this.barChartLabels = data.map(a=>a.username);
        console.log(this.barChartLabels);

        this.orderService.getOrderByUser(this.users).subscribe(
          data=>{
            console.log(data);
           this.chartData = data;
           for(var index in this.chartData){
            this.barData.push(this.chartData[index])  ;
           }
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
}
