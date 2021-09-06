import { Injectable } from '@angular/core';
import { Employee } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee:Employee ={

    sno: 'aa101',
    name: 'suraj',
    age: 25,
    designation: 'angular developer',
    doj: new Date(),
    salary: 45000

  };
  constructor() { }

  public getEmployee():Employee{
    return this.employee;
  }



}
