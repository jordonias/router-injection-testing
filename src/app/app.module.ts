import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './feature.module/feature.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component/home.component';
import { Page1Component } from './page1.component/page1.component';
import { Page2Component } from './page2.component/page2.component';

@NgModule({
  imports:      [ PublicModule, AppRoutingModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, Page1Component, Page2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
