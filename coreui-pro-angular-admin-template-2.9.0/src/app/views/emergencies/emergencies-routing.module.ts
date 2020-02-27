import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Emergencies'
    },
    children: [
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then(m => m.EmergenciesMapsModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciesRoutingModule {}
