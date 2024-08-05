import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';

// Accessibility(Highcharts); // Initialize the module

// Highcharts.chart('container', {
//   // Other chart options
//   accessibility: {
//       enabled: false
//   }
// });


const routes: Routes = [

  { path: 'verdict', loadChildren: () => import('./pages/verdictpage/verdictpage.module').then(m => m.VerdictpageModule) },
  { path: 'switcher', loadChildren: () => import('./pages/switcherpage/switcherpage.module').then(m => m.SwitcherpageModule) },
  { path: 'ipo_home', loadChildren: () => import('./pages/ipopage/ipopage.module').then(m => m.IPOpageModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
