import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockerInvestmentsRoutingModule } from './stocker-investments-routing.module';
import { TablesComponent } from '../tables/tables.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StockerInvestmentsRoutingModule,
    TablesComponent
  ]
})
export class StockerInvestmentsModule { }
