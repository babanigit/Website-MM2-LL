import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPOpageRoutingModule } from './ipopage-routing.module';
import { IpoChartComponent } from '../../components/ipo-COMPO/ipo-chart/ipo-chart.component';

import { ChartModule } from 'angular-highcharts';
import { IPOpageComponent } from './ipopage.component';
import { IpoSliderComponent } from '../../components/ipo-COMPO/ipo-slider/ipo-slider.component';
import { IpoSnapshotComponent } from '../../components/ipo-COMPO/ipo-snapshot/ipo-snapshot.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { SnapshotFilterPipe } from '../../pipes/ipo/snapshot-filter.pipe';

import { IpoSliderDemoComponent } from '../../components/ipo-COMPO/ipo-slider-demo/ipo-slider-demo.component';
import { IpoFooterComponent } from "../../components/ipo-COMPO/ipo-footer/ipo-footer.component";

@NgModule({

  declarations: [
    IPOpageComponent
  ],
  imports: [
    // basics imports
    CommonModule,
    IPOpageRoutingModule,
    ChartModule,
    // SwiperModule,
    // pipes
    SnapshotFilterPipe,
    ChartModule,
    // components
    IpoChartComponent,
    IpoSliderComponent,
    IpoSnapshotComponent,
    VerdictfooterComponent,
    IpoSliderDemoComponent,
    IpoFooterComponent
],

})
export class IPOpageModule { }
