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



  constructor(private serv: JsonDataService) {}

    // Method to calculate dot position in percentage
    getDotPosition(unitValue: any): string {
      let percentage = parseFloat(unitValue.mojocall.sub_point.replace('%', ''));
      let position = (percentage / this.maxValue) * 100;
      console.log('the positions is : ', position);
      return `${position}%`; // Return as a string with a percentage unit
    }

   // Method to determine dot color based on position
   getDotColor(unitValue: any): string {
    if (unitValue && unitValue.mojocall && unitValue.mojocall.sub_point) {
      let percentage = parseFloat(unitValue.mojocall.sub_point.replace('%', ''));
      let position = (percentage / this.maxValue) * 100;

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
