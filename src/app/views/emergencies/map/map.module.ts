import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { EmergenciesMapsRoutingModule } from './map-routing.module';
import { EmergenciesMapsComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmergenciesMapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'
      // To use the Google Maps JavaScript API, you must register your app project on the Google API Console and get a Google API key which you can add to your app
    })
  ],
  providers: [],
  declarations: [ EmergenciesMapsComponent ],
  bootstrap: [ EmergenciesMapsComponent ]
})
export class EmergenciesMapsModule {}
