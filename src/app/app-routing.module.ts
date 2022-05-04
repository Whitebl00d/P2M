import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SearchComponent } from './components/search/search.component';
const routes: Routes = [
  {
    path:'aboutus', 
    component:AboutusComponent
  },
  {
    path:'',
    component:SearchComponent
  }  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
