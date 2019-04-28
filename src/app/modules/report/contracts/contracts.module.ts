import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';
import { ContractsChartComponent } from './contracts-chart/contracts-chart.component';
import { ContractsTableComponent } from './contracts-table/contracts-table.component';


const COMPONENTS = [
  ContractsComponent, ContractsChartComponent, ContractsTableComponent
];

const MODULES = [
  SharedModule,
  CoreModule
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    ...MODULES
  ]
})
export class ContractsModule { }
