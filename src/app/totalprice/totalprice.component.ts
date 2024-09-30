import { Component } from '@angular/core';

@Component({
  selector: 'app-totalprice',
  templateUrl: './totalprice.component.html',
  styleUrls: ['./totalprice.component.css']
})
export class totalPriceComponent {
  price: number = 0;
  quantity: number = 0;
  totalPrice: number = 0;

  onPriceChange(event: any) {
    this.price = event.target.value;
    this.calculateTotalPrice();
  }

  onQuantityChange(event: any) {
    this.quantity = event.target.value;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.price * this.quantity;
  }
}