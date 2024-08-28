import { Component, OnInit } from '@angular/core';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../../models/overview';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
})
export class StockerInvestmentsComponent  {
TYPE = 'OVERVIEW'

   // List of items to display on navbar buttons
   items: any = [
    'OVERVIEW',
    'HOLDING',
    'PRICE',
    'CONTRIBUTION',
    'DIVIDEND',
    'MOJO',
    'RISK',
    'LIQUIDITY',
    'TAX',
    'RATIOS',
    'FINANCIALS',
    'RETURN',
    'RESULT',
    'TOTAL RETURNS',
  ];


}
