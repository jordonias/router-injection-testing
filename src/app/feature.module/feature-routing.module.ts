import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar.component/bar.component';
import { FooComponent } from './foo.component/foo.component';
import { HomeComponent } from './home.component/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: BarComponent,
    path: 'bar'
  },
  {
    component: FooComponent,
    path: 'foo'
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
export class FeatureRoutingModule {}