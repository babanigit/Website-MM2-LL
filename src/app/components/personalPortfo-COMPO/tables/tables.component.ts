import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  standalone: true,
  imports: [
    MatSortModule, MatTableModule, CommonModule
  ]
})
export class TablesComponent implements OnInit, AfterViewInit {


  private _liveAnnouncer = inject(LiveAnnouncer);
  private serv = inject(GetPersonalPFService);

  displayedColumns: string[] = [];
  dataSource2 = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  TYPE: 'overview' | 'holding' | 'price' | 'contri' = 'holding';
  private dataCache: { [key: string]: any[] | undefined } = {};

  ngOnInit() {
    this.getColums('holding');
    this.fetchStocks('holding');
  }

  ngAfterViewInit() {
    this.dataSource2.sort = this.sort;
  }

  private fetchStocks(type: 'overview' | 'holding') {

    if (this.dataCache[type]) {
      this.updateData(type);
      return;
    }

    this.serv.getOverviewStocks(type).subscribe({
      next: (response) => {
        const elements = Object.values(response.data.list);
        this.dataCache[type] = elements;
        this.updateData(type);
        console.log("data fetched : ", elements , " from type " + type);
      },
      error: (err) => {
        console.error('Failed to load data', err);
      },
    });
  }

  getColums(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    switch (type) {
      case 'overview':
        this.displayedColumns = ['short', 'score', 'latestPrice', 'techScore', 'vol', 'unrgainp', 'unrgaincontri', 'pwt', 'lval', 'techTxt', 'f_txt'];
        break;
      case 'holding':
        this.displayedColumns = ['short', 'score', 'latestPrice', 'iprice', 'ival', 'dgain', 'lval'];
        break;
      case 'price':
        this.displayedColumns = ['short', 'score', 'latestPrice', 'cvol', 'dh', 'dl', 'wk52h', 'wk52l', 'ath', 'atl'];
        break;
      case 'contri':
        this.displayedColumns = ['short', 'score', 'latestPrice', 'mcap', 'unrgainp', 'unrgaincontri', 'pwt', 'lval'];
        break;
    }
  }

  updateData(type: 'overview' | 'holding'): void {
    this.dataSource2.data = this.dataCache[type] || [];
  }

  onClick(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    this.TYPE = type;
    this.getColums(type);

    if (type === 'price' || type === 'contri') {
      type = 'holding';
    }

    if (!this.dataCache[type]) {
      this.fetchStocks(type);
    } else {
      this.updateData(type);
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
