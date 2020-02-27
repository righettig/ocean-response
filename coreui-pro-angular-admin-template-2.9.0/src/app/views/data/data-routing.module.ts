import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Data'
    },
    children: [
      {
        path: 'vessels',
        loadChildren: () => import('./vessels/vessels.module').then(m => m.VesselsModule)
      },
      {
        path: 'emergencies',
        loadChildren: () => import('./emergencies/emergencies.module').then(m => m.EmergenciesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule {}
