import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap';

import { CardComponent } from './components/card/card.component';

const MODULES = [
  TooltipModule.forRoot()
];

const COMPONENTS = [
  CardComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
