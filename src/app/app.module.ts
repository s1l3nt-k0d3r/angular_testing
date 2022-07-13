import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiTableComponent } from './components/api_table/api_table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ApiTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
