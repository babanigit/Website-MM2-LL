import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDotFunctionsService {
  private maxValue: number = 100; // Default value for maxValue
  private dotPositions: Map<any, string> = new Map();
  private dotColors: Map<any, string> = new Map();

  constructor() {}

  getDotPropertiesService(
    hero: string | number,
    maxValue: number
  ): { left: string; backgroundColor: string } {
    this.maxValue = maxValue;

    if (!this.dotPositions.has(hero)) {
      let percentage: number;
      if (typeof hero === 'string') {
        // Process if the hero is a string
        percentage = parseFloat(hero.replace('%', ''));
      } else if (typeof hero === 'number') {
        // Process if the hero is a number
        percentage = hero;
      } else {
        // Handle unexpected types
        throw new Error('Invalid unitValue type');
      }

      // // Ensure maxValue is not zero to avoid division by zero
      // if (this.maxValue === 0) {`
      //   throw new Error('maxValue cannot be zero');
      // }

      const position = this.calculateDotPosition(percentage);
      const color = this.calculateDotColor(percentage);
      this.dotPositions.set(hero, position);
      this.dotColors.set(hero, color);
    }
    return {
      left: this.dotPositions.get(hero) || '0%',
      backgroundColor: this.dotColors.get(hero) || 'black',
    };
  }

  // Method to calculate dot position in percentage
  private calculateDotPosition(percentage: number): string {
    let absolutePercentage = Math.abs(percentage); // Convert negative percentage to positive
    let position = (absolutePercentage / this.maxValue) * 100; // Calculate position as a percentage of maxValue
    return `${position}%`; // Return as a string with a percentage unit
  }

  // Method to determine dot color based on position
  private calculateDotColor(percentage: number): string {
    if (percentage) {
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
