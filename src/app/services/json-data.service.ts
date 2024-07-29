import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, finalize, Subject } from 'rxjs';
import { IGetDropdown, IGetVerdictReportsData } from '../models/interfaces';
import { ISwitcherReportsAndOptions } from '../models/switcherReportsAndOption';

const defaultDropdownPath = 'assets/dropdown.json';
const defaultVerdictReportPath = 'assets/verdictReports.json';
const defaultVerdictSwticherReportandOptionsPath = 'assets/switcherBasicReportsAndOptions.json';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private loadingSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getLoadingState() {
    return this.loadingSubject.asObservable();
  }

  getDROPDOWN(jsonPath: string = defaultDropdownPath) {
    return this.http.get<IGetDropdown[]>(jsonPath).pipe(
      catchError((err) => {
        console.error('Error fetching dropDown data', err);
        throw err;
      })
    );
  }

  getVerdictReport(jsonPath: string = defaultVerdictReportPath) {
    this.loadingSubject.next(false); // Emit loading true before HTTP request

    return this.http.get<IGetVerdictReportsData[]>(jsonPath).pipe(
      delay(700),
      catchError((err) => {
        console.error('Error fetching verdict report data', err);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(true)) // Emit loading false after HTTP request
    );
  }

  getSwitcherReportandOptionsData(
    jsonPath: string = defaultVerdictSwticherReportandOptionsPath
  ) {
    this.loadingSubject.next(false); // Emit loading true before HTTP request

    return this.http.get<ISwitcherReportsAndOptions[]>(jsonPath).pipe(
      delay(700),
      catchError((err) => {
        console.error('Error fetching verdict report data', err);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(true)) // Emit loading false after HTTP request
    );
  }

}
