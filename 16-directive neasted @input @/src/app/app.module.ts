import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  
  declarations: [
    AppComponent,
    ShopingCartComponent,
    ProductComponent,
  
    

 

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }