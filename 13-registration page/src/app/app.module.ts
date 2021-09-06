import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  
  declarations: [
    AppComponent,
    UserRegisterComponent,

 

  
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
