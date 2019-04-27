import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

import { ReportComponent } from './report.component';
import { MenuComponent } from './menu/menu.component';


const COMPONENTS = [
  ReportComponent, MenuComponent
];

const MODULES = [
  CoreModule, SharedModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ...MODULES,
  ]
})
export class ReportModule { }
