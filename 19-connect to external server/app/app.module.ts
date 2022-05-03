import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';














@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
  
    
    

    
    
    
  
    
  


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
