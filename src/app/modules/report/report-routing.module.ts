import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'consume'
      },
      {
        path: 'consume',
        loadChildren: './consume/consume.module#ConsumeModule',
      },
      {
        path: 'contracts',
        loadChildren: './contracts/contracts.module#ContractsModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
