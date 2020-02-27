import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VesselsComponent } from './vessels.component';

const routes: Routes = [
  {
    path: '',
    component: VesselsComponent,
    data: {
      title: 'Vessels'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VesselsRoutingModule {}
