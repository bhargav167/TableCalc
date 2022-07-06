import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productData:any;
  title = 'tableCalculator';
  amount = 0;
  discountAmount = 0;
 
constructor() {
  this.productData=[
    {
      Name:'Product1',
      Rate:100,
      Quantity:23,
      Amount:2300,
      Discount:12,
      DiscountAmount:2024

    },
    {
      Name:'Product2',
      Rate:50,
      Quantity:5,
      Amount:250,  
      Discount:5,
      DiscountAmount:237.5
    },
    {
      Name:'Product3',
      Rate:27.5,
      Quantity:128,
      Amount:3520,  
      Discount:10,
      DiscountAmount:3168
    },
    {
      Name:'Product4',
      Rate:34.9,
      Quantity:10,
      Amount:349,  
      Discount:35,
      DiscountAmount:226.85
    }, 
    {
      Name:'Product5',
      Rate:22.5,
      Quantity:20,
      Amount:450,  
      Discount:50,
      DiscountAmount:225
    },  
    {
      Name:'Product6',
      Rate:40,
      Quantity:12,
      Amount:480,  
      Discount:2,
      DiscountAmount:470.4
    },  {
      Name:'Product7',
      Rate:88,
      Quantity:5,
      Amount:440,  
      Discount:6,
      DiscountAmount:413.6
    },  {
      Name:'Product8',
      Rate:77,
      Quantity:9,
      Amount:693,  
      Discount:8,
      DiscountAmount:637.56
    },  {
      Name:'Product9',
      Rate:245,
      Quantity:5,
      Amount:1225,  
      Discount:10,
      DiscountAmount:1102.5
    }, {
      Name:'Product10',
      Rate:16,
      Quantity:17,
      Amount:272,  
      Discount:0,
      DiscountAmount:272
    },{
      Name:'Product11',
      Rate:13,
      Quantity:19,
      Amount:247,  
      Discount:4,
      DiscountAmount:237.12
    },  
  ];
 this.LoadTotal();
}
Rate($event:any,i:number){ 
  this.productData[i].Rate=$event.target.value;
  this.productData[i].Amount=$event.target.value* this.productData[i].Quantity;
  this.productData[i].DiscountAmount= this.productData[i].Amount - (this.productData[i].Amount*this.productData[i].Discount/100);
this.LoadTotal();
}
Quantity($event:any,i:number){ 
  this.productData[i].Quantity=$event.target.value; 
  this.productData[i].Amount= this.productData[i].Rate*$event.target.value;
  this.productData[i].DiscountAmount= this.productData[i].Amount - (this.productData[i].Amount*this.productData[i].Discount/100);
this.LoadTotal();
}
Discount($event:any,i:number){
  this.productData[i].Discount=$event.target.value;
  this.productData[i].DiscountAmount= this.productData[i].Amount - (this.productData[i].Amount*$event.target.value/100);
this.LoadTotal(); 
}

LoadTotal(){
  this.amount=0;
  this.discountAmount=0;
  for (let index = 0; index < this.productData.length; index++) {
    this.amount += this.productData[index].Amount;
    this.discountAmount += this.productData[index].DiscountAmount;
  }
}
}