import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  signupFormobj=new Signupform ()

  save(regiform:NgForm){
  console.log("Form Data:-",regiform.value)
  console.log("Form Data:-",this.signupFormobj)
  }

}

class Signupform {
  name:string="";
  mobileno:string="";
  email:string="";
    
}
