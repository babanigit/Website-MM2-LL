import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPortfoliosComponent } from './personal-portfolios.component';

const routes: Routes = [
  { path: 'stock-investments', component:PersonalPortfoliosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalPortfoliosRoutingModule { }
