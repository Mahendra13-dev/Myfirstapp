import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {
  firstName:string="Maahi";
  mobile:string="";

  save(){
console.log("Name :" + this.firstName);
console.log("MobileNo :" + this.mobile);

  }
 

}
