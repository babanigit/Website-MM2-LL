import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalPortfoliosRoutingModule } from './personal-portfolios-routing.module';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';


@NgModule({
  declarations: [
    PersonalPortfoliosComponent
  ],
  imports: [
    CommonModule,
    PersonalPortfoliosRoutingModule
  ]
})
export class PersonalPortfoliosModule { }
