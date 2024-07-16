import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerdictpageRoutingModule } from './verdictpage-routing.module';
import { VerdictpageComponent } from './verdictpage.component';
import { ResearchServiceComponent } from '../../components/research-service/research-service.component';
import { Verdict1Component } from '../../components/verdict1/verdict1.component';
import { Verdict2Component } from '../../components/verdict2/verdict2.component';
import { Verdict3Component } from '../../components/verdict3/verdict3.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { VerdictloadingComponent } from '../../components/verdictloading/verdictloading.component';
import { VerdictreportComponent } from '../../components/verdictreport/verdictreport.component';
import { FilterReportPipe } from '../../pipe/filter-report.pipe';

@NgModule({
  declarations: [
    VerdictpageComponent
  ],
  imports: [
    CommonModule,
    VerdictpageRoutingModule,
    CommonModule,
    Verdict1Component,
    Verdict2Component,
    Verdict3Component,
    ResearchServiceComponent,
    VerdictreportComponent,
    FilterReportPipe,
    VerdictfooterComponent,
    VerdictloadingComponent
  ]
})
export class VerdictpageModule {

 }
