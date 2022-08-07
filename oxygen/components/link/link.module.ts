import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OxygenLinkDirective } from './link.directive';

@NgModule({
  declarations: [OxygenLinkDirective],
  imports: [
    CommonModule
  ],
  exports: [OxygenLinkDirective]
})
export class OxygenLinkModule { }
