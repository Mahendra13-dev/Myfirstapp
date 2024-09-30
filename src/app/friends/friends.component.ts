import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
  syntax: string = "Syntax={{ Expression }}"
  header: string = " Employee list"

  friendsobj: any[] = [
    {
      ID: 1,
      Name: "Paresh",
      Designation: "Angular developer",
      salary: 90000,
    },
    {
      ID: 2,
      Name: "Priti",
      Designation: "Frontend developer",
      salary: 80000,
    },
    {
      ID: 3,
      Name: "Dipika",
      Designation: "Backend developer",
      salary: 85000,
    },
    {
      ID: 4,
      Name: "Abhishek",
      Designation: "Angular developer",
      salary: 75000,
    },
  ]


imageurl:string="https://www.tatvasoft.com/blog/wp-content/uploads/2020/12/Angular-Best-Practices-and-Security-1-768x389.jpg"

}