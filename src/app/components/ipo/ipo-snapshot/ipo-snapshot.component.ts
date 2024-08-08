import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../services/json-data.service';
import { I_IPOList, IPO_Data } from '../../../models/ipoList';
import { CommonModule } from '@angular/common';
import { IpoBoxComponent } from "../ipo-box/ipo-box.component";

@Component({
  selector: 'app-ipo-snapshot',
  templateUrl: './ipo-snapshot.component.html',
  styleUrl: './ipo-snapshot.component.css',
  standalone: true,
  imports: [CommonModule, IpoBoxComponent],
})
export class IpoSnapshotComponent implements OnInit {
  ipoList: I_IPOList[] = [];
  iPO_TYPE: String = 'upcoming';
  maxValue = 200;

  constructor(private serv: JsonDataService) {}

  ngOnInit(): void {
    this.fetchIpoList();
  }

  fetchIpoList() {
    this.serv.getIPOList().subscribe((res: I_IPOList[]) => {
      this.ipoList = res;
    });
  }

  onHandleClick(str: string) {
    console.log('handle clicked ...', str);
    this.iPO_TYPE = str;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Avoid':
        return 'red';
      case 'Neutral':
        return 'orange';
      case 'Subscribe':
        return 'green';
      default:
        return 'black'; // Default color if status is not recognized
    }
  }

  getListedGlColor(listedgl: string): string {
    return parseInt(listedgl) < 0 ? 'red' : 'green';
  }

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
