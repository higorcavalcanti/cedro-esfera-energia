import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CoreModule } from '../../core/core.module';

import { ReportComponent } from './report.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ConsumeComponent } from './consume/consume.component';
import { ContractualBalanceComponent } from './consume/contractual-balance/contractual-balance.component';


const COMPONENTS = [
  ReportComponent, ContractsComponent, ConsumeComponent, ContractualBalanceComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReportRoutingModule,
    CoreModule
  ]
})
export class ReportModule { }
