import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component {
  registrationForm!:FormGroup
    
  constructor(private fb:FormBuilder){
  }

  ngOnInit(){
     this.registrationForm = this.fb.group({
        name:[''],
        mobile:[''],
        email:[''],
        address:this.fb.group({
          addressLine1:[''],
          addressLine2:['']
        })
     })
    //  this.setData();
  }

  submit(){
     console.log(this.registrationForm);

     console.log("Name :- ", this.registrationForm.get('name')?.value);
     console.log("Mobile No :- " , this.registrationForm.get('mobile')?.value);
  }

  setData(){
    var responseObj: any = {
      name: "David",
      mobile: "8888881122",
      email: "david@gmail.com",
      address: {
        addressLine1: "def society flat No 101",
        addressLine2: "Pune"
      }
    }

    this.registrationForm.setValue(responseObj);
  }


  patchData(){
    var responseObj: any = {
      name: "David",
      mobile: "8888881122",
      email: "david@gmail.com",
      address: {
        addressLine1: "def society flat No 101",
      }
    }
    this.registrationForm.patchValue(responseObj);
  }

  updateEmail(){
    this.registrationForm.get('email')?.setValue('johns@gmail.com');
  }
}


