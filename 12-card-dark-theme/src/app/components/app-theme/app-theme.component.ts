import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-theme',
  templateUrl: './app-theme.component.html',
  styleUrls: ['./app-theme.component.css']
})
export class AppThemeComponent implements OnInit {

  public darkTheme:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  updateInput(event:any):void{
  this.darkTheme = event.target.darkTheme;
  }

}
