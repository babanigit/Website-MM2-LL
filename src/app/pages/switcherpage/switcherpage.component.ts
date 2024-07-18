import { Component, Input } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import { verdict1ListData, verdict1SwitcherListData } from '../../assets/verdict1Data';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css'
})
export class SwitcherpageComponent {
  sectionDataSwitcher:any[]=[]
  verdict1SwitcherListData:any[]=[]


  constructor(){
    this.sectionDataSwitcher =sectionDataSwitcher;
    this.verdict1SwitcherListData=verdict1SwitcherListData;
  }

}
