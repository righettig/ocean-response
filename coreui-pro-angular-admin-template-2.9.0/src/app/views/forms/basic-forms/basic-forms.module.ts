import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { BasicFormsRoutingModule } from './basic-forms-routing.module';

import { BasicFormsComponent } from './basic-forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    BasicFormsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    BasicFormsComponent
  ]
})
export class BasicFormsModule { }
