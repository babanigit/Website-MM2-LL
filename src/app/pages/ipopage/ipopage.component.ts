import { Component } from '@angular/core';
import { IGraphData } from '../../models/graphData';
import { graphData } from '../../assets/graphData';

@Component({
  selector: 'app-ipopage', 
  templateUrl: './ipopage.component.html',
  styleUrl: './ipopage.component.css'
})
export class IPOpageComponent {

  graphData:IGraphData|object

  constructor () {
    this.graphData =graphData
  }

}