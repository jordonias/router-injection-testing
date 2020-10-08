import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component/home.component';
import { Page1Component } from './page1.component/page1.component';
import { Page2Component } from './page2.component/page2.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: Page1Component,
    path: 'page1'
  },
  {
    component: Page2Component,
    path: 'page2'
  }
];

@NgModule({
  exports: [
      RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}