import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const BASE_MODULES = [CommonModule];

const COMPONENTS = [
  LayoutComponent, HeaderComponent, FooterComponent
];

const PIPES = [
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [...BASE_MODULES, ...COMPONENTS, ...PIPES]
})
export class CoreModule { }
