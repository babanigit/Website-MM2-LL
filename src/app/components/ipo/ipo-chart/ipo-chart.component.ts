import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { IGraphData } from '../../../models/graphData';
import {
  graphData,
  graphData1Month,
  graphData1Week,
} from '../../../assets/graphData';
import { GraphDataService } from '../../../services/graph-data.service';

@Component({
  selector: 'app-ipo-chart',
  templateUrl: './ipo-chart.component.html',
  styleUrls: ['./ipo-chart.component.css'],
  standalone: true,
  imports: [ChartModule],
})
export class IpoChartComponent implements OnInit {
  graphData: IGraphData | object = {}; // Initialize with an empty object
  graphData1Week: IGraphData | object = {};
  graphData1Month: IGraphData | object = {};

  strr: string = '1D'; // Default value
  areaChart: Chart = new Chart({}); // Initialize with an empty chart
  maxYY!: number;

  minLine = 15496.79;

  constructor(private serv: GraphDataService) {
    // this.graphData = graphData;
    // this.graphData1Week = graphData1Week;
    // this.graphData1Month = graphData1Month;
  }

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
      this.graphData1Week = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  fetchGraphMonth() {
    this.serv.getGraphMonth().subscribe((res: IGraphData) => {
      this.graphData1Month = res;
      this.updateChart(); // Initialize the chart based on default value
    });
  }

  // get the data points
  extractDataPoints(grapheee: IGraphData | object) {
    if (grapheee && 'data' in grapheee) {
      return (
        grapheee as IGraphData
      ).data.graph_indices[0].graph.IndiceArray.map((point) => {
        const timestamp = new Date(point.time).getTime();
        return [timestamp, point.y];
      });
    }
    return []; // Return empty array if no valid data
  }

  getDataPointsForSelectedRange() {
    switch (this.strr) {
      case '1D':
        return this.extractDataPoints(this.graphData);
      case '1W':
        return this.extractDataPoints(this.graphData1Week);
      case '1M':
        return this.extractDataPoints(this.graphData1Month);
      default:
        return [];
    }
  }

  updateChart() {
    const dataPoints = this.getDataPointsForSelectedRange();
    if (dataPoints.length === 0) return;

    let minY: number;
    let maxY: number;

    if (dataPoints) {
      minY = Math.min(...dataPoints.map(([_, y]) => y));
      this.maxYY = maxY = Math.max(...dataPoints.map(([_, y]) => y));

      // Determine color based on minLine value
      const colorAboveMinLine = '#DD7470'; // Color when values are above minLine
      const colorBelowMinLine = '#4CAF50'; // Color when values are below minLine
      const allPointsAboveMinLine = dataPoints.every(
        ([, y]) => y >= this.minLine
      );

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
          min: minY,
          max: maxY,
          tickAmount: 6,
          labels: {
            formatter: function () {
              const value = this.value;
              return typeof value === 'number' ? value.toFixed(2) : value;
            },
          },
          gridLineWidth: 0, // Remove grid lines

          plotLines: [
            {
              color: '#C0C0C0', // Line color
              width: 2, // Line width
              value: this.minLine, // The value at which the line should be drawn
              label: {
                text: `Min Line: ${this.minLine.toFixed(2)}`, // Label for the line
                align: 'right', // Label alignment
                style: {
                  color: '#404040',
                },
              },
            },
            {
              color: '#66FF66', // Line color for the second line
              width: 2, // Line width
              value: maxY, // The value at which the line should be drawn
              label: {
                text: `High: ${maxY.toFixed(2)}`, // Label for the line
                align: 'left', // Label alignment
                style: {
                  color: '#404040',
                },
              },
            },
            {
              color: '#FF6666', // Line color for the third line
              width: 2, // Line width
              value: minY, // The value at which the line should be drawn
              label: {
                text: `Low: ${minY.toFixed(2)}`, // Label for the line
                align: 'left', // Label alignment
                style: {
                  color: '#404040',
                },
              },
            },
          ],

          //    plotBands: [
          //   {
          //     color: '#FFDDDD', // Light red color for the plot band
          //     from: minY, // Start of the plot band
          //     to: this.minLine, // End of the plot band
          //     label: {
          //       text: `Below Min Line`, // Label for the plot band
          //       align: 'center',
          //       style: {
          //         color: '#404040',
          //       },
          //     },
          //   },
          // ],
        },
        series: [
          {
            type: 'area', // Use 'area' type for the filled area chart
            name: '',
            data: dataPoints,
            color: allPointsAboveMinLine
              ? colorAboveMinLine
              : colorBelowMinLine,
            lineWidth: 1, // Set the line width
            marker: {
              enabled: false, // Show markers (dots)
              radius: 2, // Radius of the marker
              fillColor: allPointsAboveMinLine
                ? colorAboveMinLine
                : colorBelowMinLine,
              lineWidth: 2,
              lineColor: allPointsAboveMinLine
                ? colorAboveMinLine
                : colorBelowMinLine,
            },
            tooltip: {
              valueDecimals: 2,
            },
            smooth: true,
          },
        ] as unknown as Highcharts.SeriesOptionsType[],
      });
    }
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
