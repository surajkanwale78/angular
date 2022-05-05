import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactAapComponent } from './component/contact-aap/contact-aap.component';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactCardComponent } from './component/contact-card/contact-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactAapComponent,
    ContactListComponent,
    ContactCardComponent,    
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
