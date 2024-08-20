import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalPortfoliosRoutingModule } from './personal-portfolios-routing.module';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';
import { StockerInvestmentsComponent } from '../../components/personal-portfolios/stocker-investments/stocker-investments.component';
import { MutualFundsInvestmentsComponent } from '../../components/personal-portfolios/mutual-funds-investments/mutual-funds-investments.component';

@NgModule({
  declarations: [
    PersonalPortfoliosComponent,

    // childerns
    StockerInvestmentsComponent,
    MutualFundsInvestmentsComponent
    
  ],
  imports: [CommonModule, PersonalPortfoliosRoutingModule],
})
export class PersonalPortfoliosModule {}
