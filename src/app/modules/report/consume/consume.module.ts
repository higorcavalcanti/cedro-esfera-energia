import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ConsumeRoutingModule } from './consume-routing.module';
import { ConsumeComponent } from './consume.component';
import { PurchaseContractsComponent } from './purchase-contracts/purchase-contracts.component';
import { AssignmentContractsComponent } from './assignment-contracts/assignment-contracts.component';
import { BalanceContractsComponent } from './balance-contracts/balance-contracts.component';
import { TableComponent } from './table/table.component';


const COMPONENTS = [
  ConsumeComponent,
  PurchaseContractsComponent,
  AssignmentContractsComponent,
  BalanceContractsComponent,
  TableComponent
];

const MODULES = [
  SharedModule,
  CoreModule
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    ConsumeRoutingModule,
    ...MODULES
  ]
})
export class ConsumeModule { }
