import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { BarComponent } from './bar.component/bar.component';
import { FooComponent } from './foo.component/foo.component';
import { HomeComponent } from './home.component/home.component';

@NgModule({
  imports:      [ CommonModule, FormsModule, ],
  declarations: [ BarComponent, FooComponent, HomeComponent ],
})
export class PublicModule { }

@NgModule({
  imports:      [ BrowserModule, FeatureRoutingModule, PublicModule ],
  declarations: [ FeatureComponent ],
  bootstrap:    [ FeatureComponent ]
})
export class FeatureModule { }