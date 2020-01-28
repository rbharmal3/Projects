import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinterSaleComponent } from './winter-sale/winter-sale.component';
import { SummerSaleComponent } from './summer-sale/summer-sale.component';
import { MonsoonSaleComponent } from './monsoon-sale/monsoon-sale.component';
import { ServiceSaleComponent } from './service-sale/service-sale.component';


const routes: Routes = [
  {path:"WinterSale", component:WinterSaleComponent},
  {path:"SummerSale", component:SummerSaleComponent},
  {path:"MonsoonSale", component:MonsoonSaleComponent},
  {path:"ServiceSale", component:ServiceSaleComponent},
  {path:"", redirectTo:"",pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
