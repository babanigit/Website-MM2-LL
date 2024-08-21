import { Component } from '@angular/core';
import { JsonDataService } from '../../../services/json-data.service';
import { IGetOverview } from '../../../models/overview';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrl: './stocker-investments.component.css',
})
export class StockerInvestmentsComponent {
  overviewData: IGetOverview | undefined;
  holdingData: IGetOverview | undefined;

  stocks: IGetOverview | undefined;
  constructor(private serv: GetPersonalPFService) {}

  ngOnInit(): void {
    this.fetchStocks('overview');
  }

  fetchStocks(type: 'overview' | 'holding') {
    console.log("data fetched")
    this.serv.getOverviewStocks(type).subscribe((data) => {
      this.stocks = data;
    });
  }

  i1:number=0
  i2:number=0

  onClick(str: 'overview' | 'holding') {
    if (str == 'overview' ) {
      if (this.i1<1) {
        console.log('hello ', str);
        this.fetchStocks(str);
        return
      }
      this.overviewData=this.overviewData
      this.i1++
    }

    if (str == 'holding' || this.i2<1) {
      if (this.i2<1) {
        console.log('hello ', str);
        this.fetchStocks(str);
        return
      }
      this.holdingData=this.holdingData
      this.i2++

    }
  }
}
