import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPOpageRoutingModule } from './ipopage-routing.module';
import { IpoChartComponent } from '../../components/ipo/ipo-chart/ipo-chart.component';

import { ChartModule } from 'angular-highcharts';
import { IPOpageComponent } from './ipopage.component';

@NgModule({

  declarations: [
    IPOpageComponent
  ],
  imports: [
    // basics imports
    CommonModule,
    IPOpageRoutingModule,
    ChartModule,

    // components
    IpoChartComponent,
  ],

})
export class IPOpageModule { }
