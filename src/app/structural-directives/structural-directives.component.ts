import { Component } from '@angular/core';


@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  
//   marks=60;
//   isShow:boolean=false;
//   displayMoreContent(){
//     this.isShow=true;
// }
// hideContent(){
//   this.isShow=false
// }
// isVisible = false; 

// login() {
//   this.isVisible = true; 
// }

// logout() {
//   this.isVisible = false; 
// }

// courses:string[]=["Angular","Python","Testing","ReactJs","Java"]
// friends:string[]=["Maahi","Ankush","Samadhan","sanket"]



 products:Product[] = [
  {productName:"Laptop",price:50000,quantity:2},
  {productName:"IPhone 15",price:100000,quantity:2},
  {productName:"LED TV",price:60000,quantity:1},
  {productName:"Shoes",price:10000,quantity:5}
];
}
interface Product {
productName:string;
price:number;
quantity:number;
}
