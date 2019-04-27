import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { CoreModule } from '../../../core/core.module';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './contracts.component';


const COMPONENTS = [
  ContractsComponent
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
