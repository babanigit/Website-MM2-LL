import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDotFunctionsService {
  private maxValue = 0;
  private dotPositions: Map<any, string> = new Map();
  private dotColors: Map<any, string> = new Map();

  constructor() {}

  getDotProperties(
    hero: any,
    maxValue: number
  ): { left: string; backgroundColor: string } {
    this.maxValue = maxValue;
    if (!this.dotPositions.has(hero)) {
      const position = this.calculateDotPosition(hero);
      const color = this.calculateDotColor(hero);
      this.dotPositions.set(hero, position);
      this.dotColors.set(hero, color);
    }
    return {
      left: this.dotPositions.get(hero) || '0%',
      backgroundColor: this.dotColors.get(hero) || 'black',
    };
  }

  // Method to calculate dot position in percentage
  private calculateDotPosition(unitValue: any): string {
    let percentage = parseFloat(unitValue.replace('%', ''));
    let absolutePercentage = Math.abs(percentage); // Convert negative percentage to positive
    let position = (absolutePercentage / this.maxValue) * 100; // Calculate position as a percentage of maxValue
    return `${position}%`; // Return as a string with a percentage unit
  }

  // Method to determine dot color based on position
  private calculateDotColor(unitValue: any): string {
    if (unitValue) {
      let percentage = parseFloat(unitValue.replace('%', ''));
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
}
