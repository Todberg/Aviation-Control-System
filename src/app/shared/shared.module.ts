import { NgModule } from '@angular/core';
import { OxygenButtonModule } from 'oxygen/components/button/button.module';
import { OxygenIconModule } from 'oxygen/components/icon/icon.module';
import { OxygenLinkModule } from 'oxygen/components/link/link.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Represents a module that includes application-wide components, directives and
 * pipes.
 */
@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    OxygenButtonModule,
    OxygenIconModule,
    OxygenLinkModule,
  ]
})
export class SharedModule { }
