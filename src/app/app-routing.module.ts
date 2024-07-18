import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'feature1', loadChildren: () => import('./feature1/feature1.module').then(m => m.Feature1Module) },
  { path: 'feature2', loadChildren: () => import('./feature2/feature2.module').then(m => m.Feature2Module) },

  { path: 'verdict', loadChildren: () => import('./pages/verdictpage/verdictpage.module').then(m => m.VerdictpageModule) },
  { path: 'switcher', loadChildren: () => import('./pages/switcherpage/switcherpage.module').then(m => m.SwitcherpageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
