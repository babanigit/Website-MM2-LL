import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPOpageRoutingModule } from './ipopage-routing.module';
import { IpoChartComponent } from '../../components/ipo/ipo-chart/ipo-chart.component';

import { ChartModule } from 'angular-highcharts';
import { IPOpageComponent } from './ipopage.component';
import { IpoSliderComponent } from '../../components/ipo/ipo-slider/ipo-slider.component';

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
    IpoSliderComponent
  ],

})
export class IPOpageModule { }
