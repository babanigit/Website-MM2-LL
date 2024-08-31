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
  // @ViewChild('element2') element2!: ElementRef;
  @ViewChild('element3') element3!: ElementRef;
  @ViewChild('element4') element4!: ElementRef;

  @ViewChild('element5') element5!: ElementRef;

  @ViewChild('element6') element6!: ElementRef;

  @ViewChild('element7') element7!: ElementRef;

  @ViewChild('element8') element8!: ElementRef;

  @ViewChild('element9') element9!: ElementRef;

  @ViewChild('element10') element10!: ElementRef;

  @ViewChild('element11') element11!: ElementRef;

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
        return 'element3';
      case 'Returns':
        return 'element4';
      case 'Risk':
        return 'element5';
      case 'Liquidity':
        return 'element6';
      case 'Diversification':
        return 'element7';

      case 'Quality':
        return 'element8';
      case 'Valuation':
        return 'element9';
      case 'Financial Trend':
        return 'element10';
      case 'Tax':
        return 'element11';
      default:
        return '';
    }
  }
}
