import { Component, OnInit } from '@angular/core';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../../models/overview';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
})
export class StockerInvestmentsComponent  {
TYPE = 'Risk'

   // List of items to display on navbar buttons
   items: any = [

    'Tracker',
    'Overall Analysis',
    'Returns',
    'Risk',
    'Liquidity',
    'Diversification',
    'Quality',
    'Valuation',
    'Financial Trend',
    'Tax',

  ];

  onClick(str : string) {
    this.TYPE = str;
    console.log(this.TYPE);
  }

}
