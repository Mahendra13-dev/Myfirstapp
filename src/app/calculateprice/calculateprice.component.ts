import { Component } from '@angular/core';

@Component({
  selector: 'app-calculateprice',
  templateUrl: './calculateprice.component.html',
  styleUrls: ['./calculateprice.component.css']
})
export class CalculatepriceComponent {
  price:number=0;
  quantity:number=0;
  totalprice:number=0;

  onPriceChange(event: any) {
    this.price = event.target.value;
    this.calculateTotalPrice();
  }

  onQuantityChange(event: any) {
    this.quantity = event.target.value;
    this.calculateTotalPrice();
  }


  calculateTotalPrice (){
    this.totalprice=this.price*this.quantity
  }

}
