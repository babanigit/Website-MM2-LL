import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../services/json-data.service';
import { I_IPOList, IPO_Data } from '../../../models/ipoList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ipo-snapshot',
  templateUrl: './ipo-snapshot.component.html',
  styleUrl: './ipo-snapshot.component.css',
  standalone: true,
  imports: [CommonModule],
})

export class IpoSnapshotComponent  {
  ipoList: I_IPOList[] |undefined ;
  ipoData: IPO_Data |undefined ;

  iPO_TYPE: String = 'upcoming';


  constructor(private serv: JsonDataService) {

    // fetch the data
      this.serv.getIPOList().subscribe((res: I_IPOList[]) => {
        this.ipoList = res;
        this.ipoData =res[0].data;
      });


  }

  // ngOnInit(): void {
  //   this.fetchIpoList();
  //   setTimeout(() => {
  //     console.log('the ipo list is : ', this.ipoList);
  //   }, 1);
  // }


  onHandleClick(str: string) {
    console.log('handle clicked ...', str);
    this.iPO_TYPE = str;
  }
}
