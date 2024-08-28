import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../../models/overview';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
})
export class StockerInvestmentsComponent {

  @ViewChild('element1') element1!: ElementRef;
  @ViewChild('element2') element2!: ElementRef;
  @ViewChild('element3') element3!: ElementRef;

  TYPE = 'Risk';

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

  onClick(item: string) {
    this.TYPE = item;
    console.log(this.TYPE);
    this.scrollToElement(item);
  }

  scrollToElement(item: string) {
    const elementId = this.getElementId(item);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private getElementId(item: string): string {
    switch (item) {
      case 'Tracker':
        return 'element1';
      case 'Overall Analysis':
        return 'element2';
      case 'Returns':
        return 'element3';
      // Add more cases as needed
      default:
        return '';
    }
  }
}
