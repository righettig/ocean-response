import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmergenciesMapsComponent } from './map.component';

const routes: Routes = [
  {
    path: '',
    component: EmergenciesMapsComponent,
    data: {
      title: 'Map'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciesMapsRoutingModule {}
