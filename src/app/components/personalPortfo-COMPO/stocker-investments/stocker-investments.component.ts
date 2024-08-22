import { Component, OnInit } from '@angular/core';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../../models/overview';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
})
export class StockerInvestmentsComponent implements OnInit {
  private dataCache: { [key: string]: IGetOverview | undefined } = {};

  stocks: IGetOverview | undefined;
  overviewData: IGetOverview | undefined;
  holdingData: IGetOverview | undefined;

  TYPE: 'overview' | 'holding' | 'price' = 'holding';
  unrgainTabList: any[] = []
  // priceData: IGetOverview | undefined;

  constructor(private serv: GetPersonalPFService) {}

  ngOnInit(): void {
    this.fetchStocks('holding');
  }

  fetchStocks(type: 'overview' | 'holding'): void {
    // Check if the data is already cached
    if (this.dataCache[type]) {
      this.updateData(type);
      return;
    }

    console.log('Data fetched for type:', type);
    this.serv.getOverviewStocks(type).subscribe((data) => {
      this.dataCache[type] = data;
      this.updateData(type);
    });
  }

  updateData(type: 'overview' | 'holding'): void {
    if (type === 'overview') {
      this.overviewData = this.dataCache[type];
      this.stocks = this.overviewData;
    } else if (type === 'holding') {
      this.holdingData = this.dataCache[type];
      this.stocks = this.holdingData;
    }
    //  else if (type === 'price') {
    //   this.priceData = this.dataCache[type];
    //   this.stocks = this.priceData;
    // }
  }

  onClick(type: 'overview' | 'holding' | 'price'): void {
    this.TYPE = type;

    // Handle the special case for 'price'
    if (type === 'price') {
      // Use 'overview' data instead of 'price'
      type = 'holding';
    }

    if (!this.dataCache[type]) {
      console.log('Fetching data for type:', type);
      this.fetchStocks(type);
    } else {
      this.updateData(type);
    }
  }
}
