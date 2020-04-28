import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirclemovableComponent } from './circlemovable/circlemovable.component';


@NgModule({
  declarations: [
    AppComponent,
    CirclemovableComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ],
  providers: [],
  bootstrap: [CirclemovableComponent]
})
export class AppModule { }
