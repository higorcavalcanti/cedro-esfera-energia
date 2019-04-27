import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap';

import { CardComponent } from './components/card/card.component';
import { BackToTopButtonComponent } from './components/back-to-top-button/back-to-top-button.component';

const MODULES = [
  TooltipModule.forRoot()
];

const COMPONENTS = [
  CardComponent, BackToTopButtonComponent
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
