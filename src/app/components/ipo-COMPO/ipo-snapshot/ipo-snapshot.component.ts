import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../services/json-data.service';
import { I_IPOList } from '../../../models/ipoList';
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
  ipoList: I_IPOList |undefined;
  iPO_TYPE: String = 'upcoming';
  maxValue = 200;

  constructor(private serv: JsonDataService) {}

  ngOnInit(): void {
    this.fetchIpoList();
  }

  fetchIpoList() {
    this.serv.getIPOList().subscribe((res: I_IPOList) => {
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


}
