import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGraphData } from '../../models/graphData';
import { BehaviorSubject, catchError, delay, finalize, Observable, throwError } from 'rxjs';

const defaultGraphDayPath = 'assets/graphDataDay.json';
const defaultGraphWeekPath = 'assets/graphDataWeek.json';
const defaultGraphMonthPath = 'assets/graphDataMonth.json';
const defaultGraphYearPath = 'assets/graphDataDay.json';
const defaultGraph3YearsPath = 'assets/graphDataDay.json';

@Injectable({
  providedIn: 'root',
})
export class GraphDataService {
  // Define default paths as constants
  private readonly paths = {
    day: 'assets/graphDataDay.json',
    week: 'assets/graphDataWeek.json',
    month: 'assets/graphDataMonth.json',
    YTD: 'assets/graphDataYTD.json',
    year: 'assets/graphDataYear.json',
    threeYears: 'assets/graphData3Years.json',
  };

  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Method to get graph data based on type
  getGraphData(
    type: 'day' | 'week' | 'month' | 'YTD' | 'year' | 'threeYears'
  ): Observable<IGraphData> {
    const path = this.paths[type] || this.paths.day; // Default to 'day' if type is not found
    this.loadingSubject.next(true); // Set loading to true

    return this.http.get<IGraphData>(path).pipe(
      delay(3000),
      catchError((err) => {
        
        this.loadingSubject.next(false); // Set loading to false on error
        this.errorSubject.next('Error fetching graph data'); // Set error message
        console.error('Error fetching graph data', err);
        return throwError(err); // Return an observable error
      }),
      finalize(() => this.loadingSubject.next(false)) // Emit loading false after HTTP request

    );
  }
}
