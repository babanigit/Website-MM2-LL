import { Injectable } from '@angular/core';
import { IGetOverview } from '../../models/overview';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPersonalPFService {

  private readonly paths = {
    overview: 'assets/getOverview.json',
    holding: 'assets/getHolding.json',
    // month: 'assets/graphDataMonth.json',
    // YTD: 'assets/graphDataYTD.json',
    // year: 'assets/graphDataYear.json',
    // threeYears: 'assets/graphData3Years.json',
  };

  constructor(
    private http: HttpClient
  ) { }

  getOverviewStocks(type: 'overview' | 'holding') {

    const path = this.paths[type] || this.paths.overview; // Default to 'day' if type is not found

    return this.http.get<IGetOverview>(path).pipe(

      // delay(1200),
      catchError((err) => {
        console.error('Error fetching overview data', err);
        throw err;
      })
    );
  }

}
