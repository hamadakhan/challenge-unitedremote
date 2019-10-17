import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' , component:AppComponent , children:[
    {path:'auth',loadChildren:'./authentification/authentification.module'},
    {path:'home',loadChildren:'./home/home.module'},
   
  ]},
  {path:'' ,redirectTo:'auth' , pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
