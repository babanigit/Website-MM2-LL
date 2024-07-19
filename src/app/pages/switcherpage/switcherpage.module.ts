import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitcherpageRoutingModule } from './switcherpage-routing.module';
import { SwitcherpageComponent } from './switcherpage.component';
import { VerdictfooterComponent } from '../../components/verdictfooter/verdictfooter.component';
import { Verdict3newComponent } from '../../components/verdict3new/verdict3new.component';
import { Verdict1Component } from "../../components/verdict1/verdict1.component";
import { Verdict2Component } from '../../components/verdict2/verdict2.component';
import { ResearchServiceComponent } from '../../components/research-service/research-service.component';
import { VerdictloadingComponent } from "../../components/verdictloading/verdictloading.component";
import { FilterReportPipe } from "../../pipes/filter-report.pipe";
import { VerdictreportComponent } from "../../components/verdictreport/verdictreport.component";
import { SwitcherReportComponent } from '../../components/switcher-report/switcher-report.component';
import { FilterSwitcherReportPipe } from '../../pipes/filter-switcher-report.pipe';


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
    Verdict1Component,
    Verdict2Component,
    ResearchServiceComponent,
    VerdictloadingComponent,
    FilterReportPipe,
    VerdictreportComponent,
    SwitcherReportComponent,
    FilterSwitcherReportPipe
]
})
export class SwitcherpageModule { }
