import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockerInvestmentsComponent } from './stocker-investments.component';

const routes: Routes = [
  { path: '', component: StockerInvestmentsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockerInvestmentsRoutingModule { }
