import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinterSaleComponent } from './winter-sale/winter-sale.component';
import { SummerSaleComponent } from './summer-sale/summer-sale.component';
import { MonsoonSaleComponent } from './monsoon-sale/monsoon-sale.component';
import { ServiceSaleComponent } from './service-sale/service-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    WinterSaleComponent,
    SummerSaleComponent,
    MonsoonSaleComponent,
    ServiceSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
