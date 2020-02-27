import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { VesselsRoutingModule } from './vessels-routing.module';

import { VesselsComponent } from './vessels.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    VesselsRoutingModule,
    CommonModule,
    FormsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    VesselsComponent
  ]
})
export class VesselsModule { }
