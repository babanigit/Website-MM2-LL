import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../../models/overview';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-stocker-investments',
  templateUrl: './stocker-investments.component.html',
  styleUrls: ['./stocker-investments.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    CommonModule,
    BrowserModule
  ]
})
export class StockerInvestmentsComponent implements OnInit, AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = [];
  dataSource :any = new MatTableDataSource<any>([]);
  sortedData: any[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  TYPE: 'overview' | 'holding' | 'price' | 'contri' = 'holding';

  private dataCache: { [key: string]: IGetOverview | undefined } = {};

  constructor(private serv: GetPersonalPFService) {}

  ngOnInit(): void {
    this.fetchStocks('holding');
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  fetchStocks(type: 'overview' | 'holding'): void {
    if (this.dataCache[type]) {
      this.updateData(type);
      return;
    }

    this.serv.getOverviewStocks(type).subscribe((data) => {
      this.dataCache[type] = data;
      this.updateData(type);
    });
  }

  updateData(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    // Update displayedColumns based on type
    switch (type) {
      case 'overview':
        this.displayedColumns = ['company', 'score'];
        break;
      case 'holding':
        this.displayedColumns = ['company', 'score'];
        break;
      case 'price':
        this.displayedColumns = ['company', 'score', 'latestPrice', 'combinedVolume', 'daysHigh', 'daysLow', 'weekHigh'];
        break;
      case 'contri':
        this.displayedColumns = ['company', 'score', 'marketCap'];
        break;
    }

    this.dataSource.data = this.dataCache[type]?.data || []; // Set data to MatTableDataSource
    this.sortedData = this.dataSource.data.slice(); // Initialize sortedData
  }

  onClick(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    this.TYPE = type;

    if (type === 'price' || type === 'contri') {
      type = 'holding'; // Adjusting type for 'price' and 'contri'
    }

    if (!this.dataCache[type]) {
      this.fetchStocks(type);
    } else {
      this.updateData(type);
    }
  }

}
