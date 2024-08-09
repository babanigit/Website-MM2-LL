import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';

import { GraphDataService } from '../../../services/graph-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})
export class IpoChartComponent implements OnInit {

  graphData: IGraphData |object |any ={}; // Initialize with an empty object

  strr: string = '1D'; // Default value
  areaChart: Chart = new Chart({}); // Initialize with an empty chart
  maxYY!: number;

  constructor(private serv: GraphDataService) {}

  ngOnInit(): void {
    this.fetchGraphDay();
  }

  fetchGraphDay() {
    this.serv.getGraphDay().subscribe((res: IGraphData) => {
      this.graphData = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  fetchGraphWeek() {
    this.serv.getGraphWeek().subscribe((res: IGraphData) => {
      this.graphData = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  fetchGraphMonth() {
    this.serv.getGraphMonth().subscribe((res: IGraphData) => {
      this.graphData = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  // get the data points
  extractDataPoints(g: IGraphData | object) {
    if (g && 'data' in g) {
      return (g as IGraphData).data.graph_indices[0].graph.IndiceArray.map(
        (point) => {
          const timestamp = new Date(point.time).getTime();
          return [timestamp, point.y];
        }
      );
    }
    return []; // Return empty array if no valid data
  }
  
  updateChart() {
    const dataPoints = this.extractDataPoints(this.graphData);
    let minY: number;
    let maxY: number;
  
    console.log('the data points is : ', dataPoints);
  
    if (dataPoints.length === 0) return;
  
    minY = Math.min(...dataPoints.map(([_, y]) => y));
    maxY = Math.max(...dataPoints.map(([_, y]) => y));
  
    const previousClose = this.graphData.data.graph_indices[0].PreviousClose;
  
    // Initialize or update the chart
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
        tickLength: 0,
        labels: {
          enabled: false,
        },
        gridLineWidth: 0,
      },
      yAxis: {
        title: {
          text: null,
        },
        min: minY,
        max: maxY,
        tickAmount: 6,
        labels: {
          enabled:false,
          formatter: function () {
            const value = this.value;
            return typeof value === 'number' ? value.toFixed(2) : value;
          },
        },
        gridLineWidth: 0,
        plotLines: [
          {
            color: '#C0C0C0',
            width: 2,
            value: previousClose,
            label: {
              text: `PreviousClose line : ${previousClose.toFixed(2)}`,
              align: 'right',
              style: {
                color: '#404040',
              },
            },
          },
          {
            color: '#66FF66',
            width: 2,
            value: maxY,
            label: {
              text: `High: ${maxY.toFixed(2)}`,
              align: 'left',
              style: {
                color: '#404040',
              },
            },
          },
          {
            color: '#FF6666',
            width: 2,
            value: minY,
            label: {
              text: `Low: ${minY.toFixed(2)}`,
              align: 'left',
              style: {
                color: '#404040',
              },
            },
          },
        ],
      },
      series: [
        {
          type: 'area',
          name: 'Stock Data',
          data: dataPoints,
          color: '#4CAF50', // Color for the line itself
          fillColor: {
            stops: [
              [0, 'rgba(255, 102, 102, 0.6)'], // Light red for below Previous Close
              [1, 'rgba(76, 175, 80, 0.6)']   // Light green for above Previous Close
            ],
            zIndex: 0
          },
          lineWidth: 1,
          marker: {
            enabled: false,
            radius: 2,
          },
          tooltip: {
            valueDecimals: 2,
          },
          smooth: true,
          zones: [
            {
              value: previousClose,
              color: '#FF6666', // Color for below Previous Close
              fillColor: 'rgba(255, 102, 102, 0.6)' // Light red fill for below Previous Close
            },
            {
              color: '#4CAF50', // Color for above Previous Close
              fillColor: 'rgba(76, 175, 80, 0.6)' // Light green fill for above Previous Close
            }
          ],
        },
      ] as unknown as Highcharts.SeriesOptionsType[],
    });
  }
  
  

  // Fetch data based on the selected time range and update the chart
  fetchDataAndUpdateChart(timeRange: string) {
    switch (timeRange) {
      case '1D':
        this.fetchGraphDay();
        break;
      case '1W':
        this.fetchGraphWeek();
        break;
      case '1M':
        this.fetchGraphMonth();
        break;
      default:
        console.error('Invalid time range');
    }
  }

  onGraphButtonClick(str: string) {
    console.log('the str is:', str);
    this.strr = str;
    this.fetchDataAndUpdateChart(str);
    // this.updateChart(); // Update chart when button is clicked
  }
}
