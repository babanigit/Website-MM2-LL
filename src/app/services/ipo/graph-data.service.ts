import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGraphData } from '../../models/graphData';
import { catchError } from 'rxjs';

const defaultGraphDayPath = 'assets/graphDataDay.json';
const defaultGraphWeekPath = 'assets/graphDataWeek.json';
const defaultGraphMonthPath = 'assets/graphDataMonth.json';
const defaultGraphYearPath = 'assets/graphDataDay.json';
const defaultGraph3YearsPath = 'assets/graphDataDay.json';

@Injectable({
  providedIn: 'root',
})

export class GraphDataService {
  constructor(private http: HttpClient) {}

  getGraphDay(jsonPath: string = defaultGraphDayPath) {
    return this.http.get<IGraphData>(jsonPath).pipe(
      catchError((err) => {
        console.error('Error fetching graph data', err);
        throw err;
      })
    );
  }

  getGraphWeek(jsonPath: string = defaultGraphWeekPath) {
    return this.http.get<IGraphData>(jsonPath).pipe(
      catchError((err) => {
        console.error('Error fetching graph data', err);
        throw err;
      })
    );
  }

  getGraphMonth(jsonPath: string = defaultGraphMonthPath) {
    return this.http.get<IGraphData>(jsonPath).pipe(
      catchError((err) => {
        console.error('Error fetching graph data', err);
        throw err;
      })
    );
  }

  // getGraphYear(jsonPath: string = defaultGraphDayPath) {
  //   return this.http.get<IGraphData>(jsonPath).pipe(
  //     catchError((err) => {
  //       console.error('Error fetching graph data', err);
  //       throw err;
  //     })
  //   );
  // }

  // getGraph3Years(jsonPath: string = defaultGraphDayPath) {
  //   return this.http.get<IGraphData>(jsonPath).pipe(
  //     catchError((err) => {
  //       console.error('Error fetching graph data', err);
  //       throw err;
  //     })
  //   );
  // }
}
