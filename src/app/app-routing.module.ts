import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SearchComponent } from './components/search/search.component';
import { FAQSComponent } from './components/faqs/faqs.component';
import { LatestComponent } from './components/latest/latest.component';
import { PreditingComponent } from './components/prediting/prediting.component';
const routes: Routes = [
  {
    path:'aboutus', 
    component:AboutusComponent
  },
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'FaQs',
    component:FAQSComponent
  },
  
  {
    path: 'latest',
    component:LatestComponent
  },
  {
    path: 'predict',
    component:PreditingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
