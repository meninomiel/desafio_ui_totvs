import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelComponent } from './hotels/hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    MapComponent,
    HotelsComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
