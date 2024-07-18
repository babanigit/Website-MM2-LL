import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'verdict', loadChildren: () => import('./pages/verdictpage/verdictpage.module').then(m => m.VerdictpageModule) },
  { path: 'switcher', loadChildren: () => import('./pages/switcherpage/switcherpage.module').then(m => m.SwitcherpageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
