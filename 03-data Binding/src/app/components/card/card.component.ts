import { Component, ErrorHandler, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public tourName:string ="Paris";
  public tourImg:string = "https://images.pexels.com/photos/3214982/pexels-photo-3214982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  public time:string = new Date().toLocaleTimeString();

  constructor() {
    this.updateTime();
   }

  ngOnInit(): void {
  }

  public getDate():string{
    return new Date().toLocaleDateString();
  }
  public updateTime():void{
    setInterval(() => {
        this.time = new Date().toLocaleTimeString();
        } , 1000);
  }
}
