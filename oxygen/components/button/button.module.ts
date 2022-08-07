import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OxygenButtonComponent } from './button.component';

@NgModule({
  declarations: [OxygenButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [OxygenButtonComponent]
})
export class OxygenButtonModule { }
