import { Component, Input } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css'
})
export class SwitcherpageComponent {
  sectionDataSwitcher:any[]=[]


  constructor(){
    this.sectionDataSwitcher =sectionDataSwitcher;
  }

}
