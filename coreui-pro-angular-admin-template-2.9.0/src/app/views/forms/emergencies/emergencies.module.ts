import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { EmergenciesRoutingModule } from './emergencies-routing.module';

import { EmergenciesComponent } from './emergencies.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    EmergenciesRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    EmergenciesComponent
  ]
})
export class EmergenciesModule { }
