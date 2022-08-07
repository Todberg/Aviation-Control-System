import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesComponent } from './waves.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WavesComponent],
  imports: [
    SharedModule,
  ],
  exports: [WavesComponent]
})
export class WavesModule { }
