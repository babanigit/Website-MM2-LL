import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';
import { NotFoundComponent } from '../../components/others/not-found/not-found.component';
import { NetworthTrackerComponent } from '../../components/personalPortfo-COMPO/networth-tracker/networth-tracker.component';

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
            './../../components/personalPortfo-COMPO/stocker-investments/stocker-investments.module'
          ).then((m) => m.StockerInvestmentsModule),
      },
      {
        path: 'mutualfund-investments',
        loadChildren: () =>
          import(
            './../../components/personalPortfo-COMPO/mutual-funds-investments/mutual-funds-investments.module'
          ).then((m) => m.MutualFundsInvestmentsModule),
      },

      {
        path: 'networth-tracker',
        component: NetworthTrackerComponent,
      },

      {
        path: '',
        redirectTo: 'networth-tracker',
        pathMatch: 'full',
      },

      {
        path: '**',
        component: NotFoundComponent, // Use component directly
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalPortfoliosRoutingModule {}
