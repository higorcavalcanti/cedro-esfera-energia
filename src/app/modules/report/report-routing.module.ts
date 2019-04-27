import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { ConsumeComponent } from './consume/consume.component';
import { ContractsComponent } from './contracts/contracts.component';

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
        component: ConsumeComponent,
        data: { title: 'Consumo' }
      },
      {
        path: 'contracts',
        component: ContractsComponent,
        data: { title: 'Contratos' }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
