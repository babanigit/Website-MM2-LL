import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPOpageRoutingModule } from './ipopage-routing.module';
import { IpoChartComponent } from '../../components/ipo/ipo-chart/ipo-chart.component';

import { ChartModule } from 'angular-highcharts';
import { IPOpageComponent } from './ipopage.component';
import { IpoSliderComponent } from '../../components/ipo/ipo-slider/ipo-slider.component';
import { IpoSnapshotComponent } from '../../components/ipo/ipo-snapshot/ipo-snapshot.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { SnapshotFilterPipe } from '../../pipes/ipo/snapshot-filter.pipe';

@NgModule({

  declarations: [
    IPOpageComponent
  ],
  imports: [
    // basics imports
    CommonModule,
    IPOpageRoutingModule,
    ChartModule,

    // pipes
    SnapshotFilterPipe,

    // components
    IpoChartComponent,
    IpoSliderComponent,
    IpoSnapshotComponent,
    VerdictfooterComponent
  ],

})
export class IPOpageModule { }
