import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HintComponent } from './components/hint/hint.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent,
    NavigationComponent,
    HintComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
