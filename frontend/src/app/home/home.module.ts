import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NearbyshopComponent } from './nearbyshop/nearbyshop.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [NearbyshopComponent, PreferredShopsComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
