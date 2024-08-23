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

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: { company: string | number; score: string | number; latestPrice: string | number; marketCap: string | number; combinedVolume: string | number; daysHigh: string | number; daysLow: string | number; weekHigh: string | number; }, b: { company: string | number; score: string | number; latestPrice: string | number; marketCap: string | number; combinedVolume: string | number; daysHigh: string | number; daysLow: string | number; weekHigh: string | number; }) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company':
          return compare(a.company, b.company, isAsc);
        case 'score':
          return compare(a.score, b.score, isAsc);
        case 'latestPrice':
          return compare(a.latestPrice, b.latestPrice, isAsc);
        case 'marketCap':
          return compare(a.marketCap, b.marketCap, isAsc);
        case 'combinedVolume':
          return compare(a.combinedVolume, b.combinedVolume, isAsc);
        case 'daysHigh':
          return compare(a.daysHigh, b.daysHigh, isAsc);
        case 'daysLow':
          return compare(a.daysLow, b.daysLow, isAsc);
        case 'weekHigh':
          return compare(a.weekHigh, b.weekHigh, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource.data = this.sortedData;
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
