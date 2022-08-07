import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    SharedModule,
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
