import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ApiTableComponent } from './components/apiTable/apiTable.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  MatProgressSpinnerModule, 
                  MatTableModule,
                  MatPaginatorModule ],
  declarations: [ AppComponent, ApiTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
