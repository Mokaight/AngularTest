import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAPIComponent } from './display-api/display-api.component';
import { LoadingService } from './services/loading.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    DisplayAPIComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
