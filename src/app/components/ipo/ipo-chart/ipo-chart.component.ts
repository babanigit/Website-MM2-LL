import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';
import { graphData } from '../../../assets/graphData';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule]
})
export class IpoChartComponent {

  graphData: IGraphData | object;
  areaChart: Chart;
  minY: number;
  maxY: number;

  constructor() {
    this.graphData = graphData;

    console.log('graphData:', this.graphData);


    // Extract and filter the data points to show only between 15 and 16
    const startTime = new Date('2024-08-02T15:00:00').getTime();
    const endTime = new Date('2024-08-02T16:00:00').getTime();

    const filteredDataPoints = graphData.data.graph_indices[0].graph.IndiceArray
      .map(point => {
        const yValue = typeof point.y === 'number' ? point.y : 0;
        const timestamp = new Date(point.time).getTime();
        return [timestamp, yValue];
      })
      .filter(([timestamp]) => timestamp >= startTime && timestamp <= endTime);

    // Use filtered data points directly
    const dataPoints = filteredDataPoints;

    // Calculate min and max values
    this.minY = Math.min(...dataPoints.map(([_, y]) => y));
    this.maxY = Math.max(...dataPoints.map(([_, y]) => y)) ; // Adding some buffer to the max value

    // Initialize the chart
    this.areaChart = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text: 'IPO Chart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        title: {
          text: 'Time'
        },
        tickPixelInterval: 100, // Reduce the spacing between ticks
        tickInterval: 3600 * 10, // 1-hour interval (in milliseconds)
        labels: {
          formatter: function () {
            const value = this.value;
            return typeof value === 'number'
              ? Highcharts.dateFormat('%b %d', value)
              : value;
          }
        }
      },
      yAxis: {
        title: {
          text: 'Price'
        },
        min: this.minY,
        max: this.maxY,
        tickAmount: 6,
        labels: {
          formatter: function () {
            const value = this.value;
            return typeof value === 'number'
              ? value.toFixed(2)
              : value;
          }
        }
      },
      series: [{
        type: 'area',
        name: 'IPO Price',
        data: dataPoints,
        color: '#DD7470',
        fillOpacity: 0.3,
        marker: {
          enabled: false,
          radius: 4,
          fillColor: '#DD7470',
          lineWidth: 2,
          lineColor: '#DD7470'
        },
        tooltip: {
          valueDecimals: 2
        }
      }] as Highcharts.SeriesOptionsType[]
    });
  }
}
