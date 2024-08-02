import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IPOpageComponent } from './ipopage.component';

const routes: Routes = [
  { path: '', component:IPOpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IPOpageRoutingModule { }
