import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routing
import { VesselsRoutingModule } from './vessels-routing.module';

import { VesselsComponent } from './vessels.component';

@NgModule({
  imports: [
    VesselsRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    VesselsComponent
  ]
})
export class VesselsModule { }
