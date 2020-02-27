import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';

// Routing
import { ListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

@NgModule({
  imports: [
    TabsModule,
    ListRoutingModule,
  ],
  declarations: [
    ListComponent
  ]
})
export class ListModule { }