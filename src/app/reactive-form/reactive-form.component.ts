import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  signUpForm!:FormGroup;

  ngOnInit(){
   this.signUpForm = new FormGroup({
      name:new FormControl(),
      mobile:new FormControl(),
   })
  }

  submit(){
    console.log(this.signUpForm.value);
  }
}
