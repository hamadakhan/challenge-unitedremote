import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { NearbyshopComponent } from './nearbyshop/nearbyshop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component:HomeComponent ,children:[
    {path:'nearshop',component:NearbyshopComponent},
    {path:'preferredshop',component:PreferredShopsComponent},
    {path:'',redirectTo:'nearshop',pathMatch:'full'}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
