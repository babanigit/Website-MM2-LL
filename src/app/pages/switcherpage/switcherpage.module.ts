import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitcherpageRoutingModule } from './switcherpage-routing.module';
import { SwitcherpageComponent } from './switcherpage.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { Verdict3newComponent } from '../../components/verdict3new/verdict3new.component';


@NgModule({
  declarations: [
    SwitcherpageComponent
  ],
  imports: [
    CommonModule,
    SwitcherpageRoutingModule,
    VerdictfooterComponent,
    Verdict3newComponent
  ]
})
export class SwitcherpageModule { }
