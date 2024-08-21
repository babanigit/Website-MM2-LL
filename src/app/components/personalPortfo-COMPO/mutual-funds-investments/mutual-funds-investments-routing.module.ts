import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutualFundsInvestmentsComponent } from './mutual-funds-investments.component';

const routes: Routes = [
  { path: '', component: MutualFundsInvestmentsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualFundsInvestmentsRoutingModule { }
