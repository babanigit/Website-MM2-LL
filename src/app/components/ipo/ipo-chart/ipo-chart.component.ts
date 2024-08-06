import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';
import { graphData, graphData1Week } from '../../../assets/graphData';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule],
})
export class IpoChartComponent {
  graphData: IGraphData | object;
  graphData1Week: IGraphData | object;

  strr:string='1D'

  areaChart: Chart;
  minY: number;
  maxY: number;

  constructor() {
    this.graphData = graphData;
    this.graphData1Week= graphData1Week

    // Extract and filter the data points
    const DATA_POINTS = graphData.data.graph_indices[0].graph.IndiceArray.map(
      (point) => {
        const timestamp = new Date(point.time).getTime();
        return [timestamp, point.y];
      }
    );

    // Calculate min and max values
    this.minY = Math.min(...DATA_POINTS.map(([_, y]) => y));
    this.maxY = Math.max(...DATA_POINTS.map(([_, y]) => y));

    // Initialize the chart
    this.areaChart = new Chart({
      chart: {
        type: 'area',
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        type: 'datetime',
        tickLength: 0, // Remove tick marks
        labels: {
          enabled: false, // Remove x-axis labels
        },
        gridLineWidth: 0, // Remove grid lines
      },
      yAxis: {
        title: {
          text: null, // Remove y-axis title
        },
        min: this.minY,
        max: this.maxY,
        tickAmount: 6,
        labels: {
          formatter: function () {
            const value = this.value;
            return typeof value === 'number' ? value.toFixed(2) : value;
          },
        },
        gridLineWidth: 0, // Remove grid lines
      },
      series: [
        {
          type: 'area', // Use 'area' type for the filled area chart
          name: '',
          data: DATA_POINTS,
          color: '#DD7470',
          lineWidth: 1, // Set the line width
          marker: {
            enabled: false, // Show markers (dots)
            radius: 2, // Radius of the marker
            fillColor: '#DD7470',
            lineWidth: 2,
            lineColor: '#DD7470',
          },
          tooltip: {
            valueDecimals: 2,
          },
          smooth: true,
        },
      ] as unknown as Highcharts.SeriesOptionsType[],

    });


  }

  onGraphButtonClick(str:string) {
    console.log("the str is : ", str)
    this.strr=str;
  }
}
