import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPOpageRoutingModule } from './ipopage-routing.module';
import { ChartModule } from 'angular-highcharts';
import { IpoChartComponent } from '../../components/ipo/ipo-chart/ipo-chart.component';


@NgModule({
  declarations: [
    // IpoChartComponent
  ],
  imports: [
    CommonModule,
    IPOpageRoutingModule,

    ChartModule,
    IpoChartComponent,

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line if it's a Web Component

})
export class IPOpageModule { }
