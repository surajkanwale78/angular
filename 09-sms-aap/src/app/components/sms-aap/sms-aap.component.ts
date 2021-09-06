import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-aap',
  templateUrl: './sms-aap.component.html',
  styleUrls: ['./sms-aap.component.css']
})
export class SmsAapComponent implements OnInit {
  public message:string = '';
  public maxCharCount:number = 200;

  constructor() { }

  ngOnInit(): void {
  }

}
