import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, finalize, Subject } from 'rxjs';
import { IGetDropdown, IGetVerdictReportsData } from '../models/interfaces';
import { ISwitcherReportsAndOptions } from '../models/switcherReportsAndOption';
import { ISwitcherResult } from '../models/switcherResult';

const defaultDropdownPath = 'assets/dropdown.json';
const defaultVerdictReportPath = 'assets/verdictReports.json';
const defaultVerdictSwticherReportandOptionsPath = 'assets/switcherBasicReportsAndOptions.json';
const defaultSwitcherResultPath = 'assets/switcherResult.json';


@Injectable({
  providedIn: 'root',
})

export class JsonDataService {
  private loadingSubject = new Subject<boolean>();
  private loadingSubjectResult = new Subject<boolean>();


  constructor(private http: HttpClient) {}

  getLoadingState() {
    return this.loadingSubject.asObservable();
  }

  getLoadingState2() {
    return this.loadingSubjectResult.asObservable();
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
      delay(200),
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
      delay(200),
      catchError((err) => {
        console.error('Error fetching switcherReport data', err);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(true)) // Emit loading false after HTTP request
    );
  }

  getSwitcherResult(
    jsonPath: string = defaultSwitcherResultPath
  ) {
    this.loadingSubject.next(false); // Emit loading true before HTTP request

    return this.http.get<ISwitcherResult[]>(jsonPath).pipe(
      delay(200),
      catchError((err) => {
        console.error('Error fetching switcherResult data', err);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(true)) // Emit loading false after HTTP request
    );
  }


  getSwitcherReportandOptionsData2(
    jsonPath: string = defaultVerdictSwticherReportandOptionsPath
  ) {
    this.loadingSubjectResult.next(false); // Emit loading true before HTTP request

    return this.http.get<ISwitcherReportsAndOptions[]>(jsonPath).pipe(
      delay(200),
      catchError((err) => {
        console.error('Error fetching switcherReport data', err);
        throw err;
      }),
      finalize(() => this.loadingSubjectResult.next(true)) // Emit loading false after HTTP request
    );
  }


}
