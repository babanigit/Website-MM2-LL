import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, finalize, Subject } from 'rxjs';
import { IGetDropdown } from '../models/interfaces';

const defaultJSONPath = 'assets/dropdown.json';


@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private loadingSubject = new Subject<boolean>();


  constructor(private http: HttpClient) { }

  getLoadingState() {
    return this.loadingSubject.asObservable();
  }

  getDROPDOWN(jsonPath: string = defaultJSONPath) {
    this.loadingSubject.next(true); // Emit loading true before HTTP request

    return this.http.get<IGetDropdown[]>(jsonPath).pipe(
      delay(2000),
      catchError((err) => {
        console.error('Error fetching dropDown data', err);
        throw err;
      }),
      finalize(() => this.loadingSubject.next(false)) // Emit loading false after HTTP request
    );

  }
}
