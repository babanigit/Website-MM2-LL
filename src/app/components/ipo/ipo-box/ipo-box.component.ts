import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ipo-box',
  templateUrl: './ipo-box.component.html',
  styleUrl: './ipo-box.component.css',
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class IpoBoxComponent {
  maxValue = 200;


    // Method to calculate dot position in percentage
    getDotPosition(unitValue: any): string {
      let percentage = parseFloat(unitValue.mojocall.sub_point.replace('%', ''));
      let absolutePercentage = Math.abs(percentage); // Convert negative percentage to positive
      let position = (absolutePercentage / this.maxValue) * 100; // Calculate position as a percentage of maxValue
      return `${position}%`; // Return as a string with a percentage unit
    }
  
    // Method to determine dot color based on position
    getDotColor(unitValue: any): string {
      if (unitValue && unitValue.mojocall && unitValue.mojocall.sub_point) {
        let percentage = parseFloat(
          unitValue.mojocall.sub_point.replace('%', '')
        );
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
