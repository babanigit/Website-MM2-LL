import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';

import { GraphDataService } from '../../../services/ipo/graph-data.service';
import { CommonModule } from '@angular/common';
import { GetDotFunctionsService } from '../../../services/ipo/get-dot-functions.service';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule, CommonModule],
})
export class IpoChartComponent implements OnInit {
  graphData: IGraphData | object | any = {}; // Initialize with an empty object

  strr: string = 'day'; // Default value
  areaChart: Chart = new Chart({}); // Initialize with an empty chart
  maxYY!: number;

  maxValue = 100;
  dotPositions: Map<any, string> = new Map();
  dotColors: Map<any, string> = new Map();

  constructor(
    private serv: GraphDataService,
    private dot: GetDotFunctionsService
  ) {}

  getDotProperties(hero: IGraphData) {
    return this.dot.getDotPropertiesService(
      hero.data.graph_indices[0].WEEK_POINTER_52,
      this.maxValue
    );
  }

  ngOnInit(): void {
    this.fetchGraphData('day');
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
  
    // Initialize segments
    const abovePreviousClose: [number, number][] = [];
    const belowPreviousClose: [number, number][] = [];
    let currentSeries: { data: [number, number][]; color: string }[] = [];
  
    // Function to add a new segment
    const addSegment = (seriesData: [number, number][], color: string) => {
      if (seriesData.length > 0) {
        currentSeries.push({
          data: seriesData,
          color: color,
        });
      }
    };
  
    dataPoints.forEach(([timestamp, value], index) => {
      if (index === 0) return; // Skip first point for comparison
  
      const [prevTimestamp, prevValue] = dataPoints[index - 1];
      if (prevValue > previousClose && value > previousClose) {
        abovePreviousClose.push([timestamp, value]);
      } else if (prevValue < previousClose && value < previousClose) {
        belowPreviousClose.push([timestamp, value]);
      } else {
        // Handle intersections
        if (prevValue > previousClose && value < previousClose) {
          addSegment([...abovePreviousClose, [prevTimestamp, previousClose], [timestamp, previousClose]], '#4CAF50');
          abovePreviousClose.length = 0;
          belowPreviousClose.push([prevTimestamp, previousClose]);
          belowPreviousClose.push([timestamp, previousClose]);
        } else if (prevValue < previousClose && value > previousClose) {
          addSegment([...belowPreviousClose, [prevTimestamp, previousClose], [timestamp, previousClose]], '#FF6666');
          belowPreviousClose.length = 0;
          abovePreviousClose.push([prevTimestamp, previousClose]);
          abovePreviousClose.push([timestamp, previousClose]);
        }
      }
    });
  
    // Add remaining segments
    if (abovePreviousClose.length > 0) {
      addSegment(abovePreviousClose, '#4CAF50');
    }
    if (belowPreviousClose.length > 0) {
      addSegment(belowPreviousClose, '#FF6666');
    }
  
    // Initialize or update the chart
    this.areaChart = new Chart({
      accessibility: {
        enabled: false,
      },
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
          enabled: false,
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
      series: currentSeries.map(series => ({
        type: 'area',
        name: 'Stock Data',
        data: series.data,
        color: series.color,
        fillColor: {
          stops: [
            [0, series.color],
            [1, series.color],
          ],
          zIndex: 0,
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
      })) as unknown as Highcharts.SeriesOptionsType[],
    });
  }

  
  fetchGraphData(
    type: 'day' | 'week' | 'month' | 'YTD' | 'year' | 'threeYears'
  ) {
    this.serv.getGraphData(type).subscribe((res: IGraphData) => {
      this.graphData = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  onGraphButtonClick(
    type: 'day' | 'week' | 'month' | 'YTD' | 'year' | 'threeYears'
  ) {
    console.log('clicked ', type);
    this.strr=type
    this.fetchGraphData(type);
  }
}
