import { Component, OnInit } from '@angular/core';


interface product{
  sno : string;
  name : string;
  image : string;
  qty : number ;
  price : number;

}


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:product = {
    sno : 'AA101',
    name : 'Mi Watch',
    image : 'https://rukminim1.flixcart.com/image/312/312/k0tw13k0/smartwatch/f/t/v/010-02063-70-garmin-original-imafkgnbzaykvjpa.jpeg?q=70',
    qty : 2,
    price : 1500
  };

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty + 1 
    }
  
    
  }
  public decrementQty():void{
    this.product = {
      ...this.product,
      qty : this.product.qty - 1 > 0 ? this.product.qty -1 :1 
    }
  
    
  }
 
}
