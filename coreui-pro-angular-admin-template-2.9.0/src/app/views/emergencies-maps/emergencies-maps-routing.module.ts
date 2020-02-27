import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciesMapsComponent } from './emergencies-maps.component';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesMapsComponent,
    data: {
      title: 'Emergencies Map'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciesMapsRoutingModule {}
