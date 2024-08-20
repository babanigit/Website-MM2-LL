import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalPortfoliosComponent,
    children: [

      // childrens
      {
        path: 'stock-investments',
        loadChildren: () =>
          import(
            './../../components/personal-portfolios/stocker-investments/stocker-investments.module'
          ).then((m) => m.StockerInvestmentsModule),
      },
      {
        path: 'mutualfund-investments',
        loadChildren: () =>
          import(
            './../../components/personal-portfolios/mutual-funds-investments/mutual-funds-investments.module'
          ).then((m) => m.MutualFundsInvestmentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalPortfoliosRoutingModule {}
