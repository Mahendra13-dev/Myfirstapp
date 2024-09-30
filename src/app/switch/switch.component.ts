import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
orderstatus:string="cancelled";

updateStatus(status:string){
  this.orderstatus=status;
}
}
