import { Component, OnInit } from '@angular/core';

interface Empolyee{
  sno: string;
  name: string;
  age: number;
  designation: string;
  doj: Date;
  salary: number;
}


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  public employee:Empolyee ={

    sno: 'aa101',
    name: 'suraj',
    age: 25,
    designation: 'angular developer',
    doj: new Date(),
    salary: 45000

  };


  constructor() { }

  ngOnInit(): void {
  }

}
