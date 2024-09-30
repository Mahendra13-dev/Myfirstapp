import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
getdata () {
  console.log("Function is called");
}
counter:number=0;
increment(){
  if(this.counter>=0){
    this.counter++;
  }
}

decrement(){
  if(this.counter>0){
    this.counter--;
  }
}

}
