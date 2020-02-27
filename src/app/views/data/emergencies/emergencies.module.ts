import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { EmergenciesRoutingModule } from './emergencies-routing.module';

import { EmergenciesComponent } from './emergencies.component';

@NgModule({
  imports: [
    EmergenciesRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    EmergenciesComponent
  ]
})
export class EmergenciesModule { }
