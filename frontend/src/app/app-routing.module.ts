import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {path:'',loadChildren:'./authentification/authentification.module#AuthentificationModule'},
    {path:'home',loadChildren:'./home/home.module#HomeModule'},
  {path:'' ,redirectTo:'auth' , pathMatch:'full'},
  {path:'**' ,redirectTo:'auth' , pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
