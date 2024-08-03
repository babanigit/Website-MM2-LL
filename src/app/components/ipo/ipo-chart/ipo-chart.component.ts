import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule]
})
export class IpoChartComponent {

  chart: Chart;

  constructor() {
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'area',  // Explicitly define the series type
        name: 'Line 1',
        data: [1, 6, 3] // it will addPoints here
      }] as Highcharts.SeriesOptionsType[]
    });
  }

  // Add point to chart series
  HandleAdd() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    }
  }
}
