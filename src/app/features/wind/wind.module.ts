import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindComponent } from './wind.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WindComponent],
  imports: [
    SharedModule,
  ],
  exports: [WindComponent]
})
export class WindModule { }
