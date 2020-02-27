import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { VesselsRoutingModule } from './vessels-routing.module';

import { VesselsComponent } from './vessels.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    VesselsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    VesselsComponent
  ]
})
export class VesselsModule { }
