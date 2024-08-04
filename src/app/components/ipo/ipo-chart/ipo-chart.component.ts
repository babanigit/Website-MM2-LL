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

    // console.log('graphData:', this.graphData);

    // Extract and filter the data points to show only between 15 and 16
    const startTime = new Date('2024-08-02T15:00:00').getTime();
    const endTime = new Date('2024-08-02T16:00:00').getTime();

    const filteredDataPoints = graphData.data.graph_indices[0].graph.IndiceArray
      .map(point => {
        // const yValue = typeof point.y === 'number' ? point.y : 0;

        const timestamp = new Date(point.time).getTime();
        return [timestamp, point.y];
      })
      .filter(([timestamp]) => timestamp >= startTime && timestamp <= endTime);

    // Calculate min and max values
    this.minY = Math.min(...filteredDataPoints.map(([_, y]) => y));
    this.maxY = Math.max(...filteredDataPoints.map(([_, y]) => y)); // Adding some buffer to the max value

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
        tickPixelInterval: 50, // Reduce the spacing between ticks
        tickInterval: 3600 * 10, // 1-hour interval (in milliseconds)
        labels: {
          enabled: false, // This will remove the x-axis labels

          //  time and date
          formatter: function () {
            const value = this.value;
            return typeof value === 'number'
              ? Highcharts.dateFormat('%b %d', value)
              : value;
          }
        },
        plotLines: [{ // Add the vertical line
          color: 'green', // Line color
          width: 2, // Line width
          value: 16104, // X-axis value where the line will be drawn
          label: {
            text: 'Vertical Line',
            align: 'right',
            style: {
              color: 'green'
            }
          },
          zIndex: 5 // Make sure it's on top of other elements
        }]
      },
      yAxis: {
        title: {
          text: 'Price'
        },
        min: this.minY ,
        max: this.maxY,
        tickAmount: 6,
        labels: {
          enabled: true,
          formatter: function () {
            const value = this.value;
            return typeof value === 'number'
              ? value.toFixed(2)
              : value;
          }
        }
      },
      series: [{
        type: 'area', // Use 'line' type for smooth lines
        name: 'IPO Price',
        data: filteredDataPoints,
        color: '#DD7470',
        lineWidth: 2, // Set the line width
        marker: {
          enabled: false, // Show markers (dots)
          radius: 4, // Radius of the marker
          fillColor: '#DD7470',
          lineWidth: 2,
          lineColor: '#DD7470'
        },
        tooltip: {
          valueDecimals: 2
        },
        smooth: true
      }] as unknown as Highcharts.SeriesOptionsType[]
    });
  }
}
