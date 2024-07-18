import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitcherpageComponent } from './switcherpage.component';

const routes: Routes = [
  { path: '', component:SwitcherpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitcherpageRoutingModule { }
