import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css'],
})
export class AttributeDirectivesComponent {
  cars: Car[] = [
    {
      carName: 'Fortuner',
      brand: 'Toyota',
      price: 5000000,
      color: 'Black',
    },
    { carName: 'Swift', brand: 'Maruti', price: 900000, color: 'Red' },
    { carName: 'Endevour', brand: 'Ford', price: 4500000, color: 'Black' },
    { carName: 'Landcruiser', brand: 'Toyota', price: 1000000, color: 'red' },
  ];

products:any[]=[{
  productName:"Mobile",
  price:25000,
  quantity:10
},
{
productName:"Laptop",
price:35000,
quantity:20
},
{ productName:"Mobile",
price:25000,
quantity:15

}];

students:any[]=[
  {studentName:"David",address:"Pune",mobileNo:9922992299},
  {studentName:"Mike",address:"Mumbai",mobileNo:9922233444},
  {studentName:"John",address:"Banglore",mobileNo:8888222324}
];

}

interface Car {
  carName: string;
  brand: string;
  price: number;
  color: string;
}
