import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShowPasswordComponent } from './components/show-password/show-password.component';


@NgModule({
  
  declarations: [
    AppComponent,
    ShowPasswordComponent,
  
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
