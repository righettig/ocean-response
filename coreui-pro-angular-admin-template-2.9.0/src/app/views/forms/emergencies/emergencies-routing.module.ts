import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenciesComponent } from './emergencies.component';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciesRoutingModule {}
