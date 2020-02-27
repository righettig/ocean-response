import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Routing
import { ListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    TabsModule,
    CommonModule,
    FormsModule,
    ListRoutingModule,
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }