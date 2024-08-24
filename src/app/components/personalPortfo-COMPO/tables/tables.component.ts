import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import { GetPersonalPFService } from '../../../services/personal-portfolio/get-personal-pf.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: true,
  imports: [MatSortModule, MatTableModule, CommonModule, MatIconModule],
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
    console.log('MatSort:', this.sort); // Debugging statement
    if (this.sort) {
      this.dataSource2.sort = this.sort;
    } else {
      console.error('MatSort is not available');
    }
  }



  private fetchStocks(type: 'overview' | 'holding' ) {
    if (this.dataCache[type]) {
      this.updateData(type);
      return;
    }

    this.serv.getOverviewStocks(type).subscribe({
      next: (response) => {
        const elements = Object.values(response.data.list);
        this.dataCache[type] = elements;
        this.updateData(type);
      },
      error: (err) => {
        console.error('Failed to load data', err);
      },
    });
  }

  getColums(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    switch (type) {
      case 'overview':
        this.displayedColumns = [
          'short',
          'score',
          'combined',
          'techScore',
          'vol',
          'unrgainp',
          'unrgaincontri',
          'pwt',
          'lval',
          'techTxt',
          'f_txt',
        ];
        break;
      case 'holding':
        this.displayedColumns = [
          'short',
          'score',
          'combined',
          'iprice',
          'ival',
          'dgain',
          'lval',
        ];
        break;
      case 'price':
        this.displayedColumns = [
          'short',
          'score',
          'combined',
          'cvol',
          'dh',
          'dl',
          'wk52h',
          'wk52l',
          'ath',
          'atl',
        ];
        break;
      case 'contri':
        this.displayedColumns = [
          'short',
          'score',
          'combined',
          'mcap',
          'unrgainp',
          'unrgaincontri',
          'pwt',
          'lval',
        ];
        break;
    }
  }

  updateData(type: 'overview' | 'holding' | 'price' | 'contri'): void {
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

  sortBy(property: 'cmp' | 'chg') {
    const sortState: Sort = { active: property, direction: this.sort.direction === 'asc' ? 'desc' : 'asc' };
    this.sort.active = property;
    this.sort.direction = sortState.direction;

    this.dataSource2.data = this.dataSource2.data.sort((a, b) => {
      const isAsc = sortState.direction === 'asc';
      if (a[property] < b[property]) {
        return isAsc ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });

    this.announceSortChange(sortState);
  }

  isSortActive(column: 'cmp' | 'chg'): boolean {
    console.log('Current sort active:', this.sort?.active); // Debugging statement
    return this.sort?.active === column;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
