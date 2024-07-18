import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitcherpageRoutingModule } from './switcherpage-routing.module';
import { SwitcherpageComponent } from './switcherpage.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { Verdict3newComponent } from '../../components/verdict3new/verdict3new.component';
import { Verdict1Component } from "../../components/verdict1/verdict1.component";


@NgModule({
  declarations: [
    SwitcherpageComponent
  ],
  imports: [
    CommonModule,
    SwitcherpageRoutingModule,
    VerdictfooterComponent,
    Verdict3newComponent,
    Verdict1Component,
    Verdict1Component
]
})
export class SwitcherpageModule { }
