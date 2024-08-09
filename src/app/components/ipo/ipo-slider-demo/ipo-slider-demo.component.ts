import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../services/json-data.service';
import { I_IPOList } from '../../../models/ipoList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ipo-slider-demo',
  templateUrl: './ipo-slider-demo.component.html',
  styleUrl: './ipo-slider-demo.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class IpoSliderDemoComponent implements OnInit {
  ipoList: I_IPOList[] = [];

  maxValue = 200;

  dotPositions: Map<any, string> = new Map();
  dotColors: Map<any, string> = new Map();

  constructor(private serv: JsonDataService) {}

  getDotProperties(hero: any) {
    if (!this.dotPositions.has(hero)) {
      const position = this.calculateDotPosition(hero);
      const color = this.calculateDotColor(hero);
      this.dotPositions.set(hero, position);
      this.dotColors.set(hero, color);
    }
    return {
      left: this.dotPositions.get(hero),
      backgroundColor: this.dotColors.get(hero),
    };
  }

  // Method to calculate dot position in percentage
  calculateDotPosition(unitValue: any): string {
    let percentage = parseFloat(unitValue.mojocall.sub_point.replace('%', ''));
    let absolutePercentage = Math.abs(percentage); // Convert negative percentage to positive
    let position = (absolutePercentage / this.maxValue) * 100; // Calculate position as a percentage of maxValue

    return `${position}%`; // Return as a string with a percentage unit
  }

  // Method to determine dot color based on position
  calculateDotColor(unitValue: any): string {
    if (unitValue && unitValue.mojocall && unitValue.mojocall.sub_point) {
      let percentage = parseFloat(
        unitValue.mojocall.sub_point.replace('%', '')
      );
      // Convert negative percentage to positive
      let absolutePercentage = Math.abs(percentage);
      let position = (absolutePercentage / this.maxValue) * 100;

      if (position < 33) {
        return 'red';
      } else if (position < 66) {
        return 'orange';
      } else {
        return 'green';
      }
    }
    return 'black'; // Default color if sub_point is undefined or invalid
  }

  ngOnInit(): void {
    this.fetchIpoList();
  }

  fetchIpoList() {
    this.serv.getIPOList().subscribe((res: I_IPOList[]) => {
      this.ipoList = res;
    });
  }
}
