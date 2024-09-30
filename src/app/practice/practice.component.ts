import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  firstName:string="John";
  mobileNo:string="";


  changeName(){
    this.firstName = "Sam"
  }

  fNameChange(e:any){
    if(e.target != null){
      this.firstName = e.target.value;
    }
  }

  save(){
    console.log("Name : " + this.firstName);
    console.log("Mobile No :  " + this.mobileNo);
  }
}


