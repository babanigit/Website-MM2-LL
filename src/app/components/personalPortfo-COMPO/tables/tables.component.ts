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

  // type
  TYPE:
    | 'OVERVIEW'
    | 'HOLDING'
    | 'PRICE'
    | 'CONTRIBUTION'
    | 'DIVIDEND'
    | 'MOJO'
    | 'RISK'
    | 'LIQUIDITY'
    | 'TAX'
    | 'RATIOS'
    | 'FINANCIALS'
    | 'RETURN'
    | 'RESULT'
    | 'TOTAL RETURNS' = 'HOLDING';

  private dataCache: { [key: string]: any[] | undefined } = {};

  ngOnInit() {
    this.getColums('HOLDING');
    this.fetchStocks('HOLDING');
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource2.sort = this.sort;
      this.sort.sortChange.subscribe((sortState: Sort) => {
        console.log('The sort state is:', sortState);
        if (sortState.active) {
          this.sortData(sortState);
        }
      });
    } else {
      console.error('MatSort is not available');
    }
  }

  // List of items to display on navbar buttons
  items: any = [
    'OVERVIEW',
    'HOLDING',
    'PRICE',
    'CONTRIBUTION',
    'DIVIDEND',
    'MOJO',
    'RISK',
    'LIQUIDITY',
    'TAX',
    'RATIOS',
    'FINANCIALS',
    'RETURN',
    'RESULT',
    'TOTAL RETURNS',
  ];

  private fetchStocks(type: 'OVERVIEW' | 'HOLDING') {
    if (this.dataCache[type]) {
      this.updateStocks(type);
      return;
    }

    this.serv.getOverviewStocks(type).subscribe({
      next: (response) => {
        const elements = Object.values(response.data.list);
        this.dataCache[type] = elements;
        this.updateStocks(type);
        console.log('Fetched data:', elements);
      },
      error: (err) => {
        console.error('Failed to load data', err);
      },
    });
  }

  updateStocks(type: 'OVERVIEW' | 'HOLDING' | 'PRICE' | 'CONTRIBUTION'): void {
    this.dataSource2.data = this.dataCache[type] || [];
  }

  getColums(type: 'OVERVIEW' | 'HOLDING' | 'PRICE' | 'CONTRIBUTION'): void {
    switch (type) {
      case 'OVERVIEW':
        this.displayedColumns = ['short', 'score'];
        break;
      case 'HOLDING':
        this.displayedColumns = [
          'short',
          'score',
          'cmp',
          'iprice',
          // 'ival',
          // 'dgain',
          // 'unrgain',
          // 'lval',
        ];
        break;
      case 'PRICE':
        this.displayedColumns = ['short', 'score'];
        break;
      case 'CONTRIBUTION':
        this.displayedColumns = ['short', 'score'];
        break;
    }
  }

  onClick(
    type: 'OVERVIEW' | 'HOLDING' | 'PRICE' | 'CONTRIBUTION'
    // | 'DIVIDEND'
    // | 'MOJO'
    // | 'RISK'
    // | 'LIQUIDITY'
    // | 'TAX'
    // | 'RATIOS'
    // | 'FINANCIALS'
    // | 'RETURN'
    // | 'RESULT'
    // | 'TOTAL RETURNS'
  ): void {
    // this.activeItem = type;

    this.TYPE = type;
    this.getColums(type);

    if (type === 'PRICE' || type === 'CONTRIBUTION') {
      type = 'HOLDING';
    }

    if (!this.dataCache[type]) {
      this.fetchStocks(type);
    } else {
      this.updateStocks(type);
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  private sortData(sortState: Sort) {
    const data = this.dataSource2.data.slice();
    if (!sortState.active || sortState.direction === '') {
      this.dataSource2.data = data;
      return;
    }

    const isAsc = sortState.direction === 'asc';

    this.dataSource2.data = data.sort((a, b) => {
      let valueA: number;
      let valueB: number;

      valueA = +a.dotsum[sortState.active] || 0;
      valueB = +b.dotsum[sortState.active] || 0;

      console.log(
        `Comparing ${valueA} with ${valueB} for column ${sortState.active}`
      );
      return compare(valueA, valueB, isAsc);
    });
  }

  // specially for latest price cause it has two data inside and angular material dot suppport this.
  sortBy(property: string) {
    const sortState: Sort = {
      active: property,
      direction: this.sort.direction === 'asc' ? 'desc' : 'asc',
    };
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

  isSortActive(column: string): boolean {
    return this.sort?.active === column && this.sort?.direction !== '';
  }

  getSortIconClass(column: string): string {
    if (this.sort?.active === column) {
      return this.sort?.direction === 'asc' ? 'arrow_upward' : 'arrow_downward';
    }
    return '';
  }

  // get colors and bg colors
  getColor(listedgl: string): string {
    const value = parseFloat(listedgl);
    if (isNaN(value)) {
      return 'black'; // Fallback color if value is not a number
    }
    if (value === 0) {
      return ''; // Neutral color for 0
    }
    return isNaN(value) || value < 0 ? 'red' : 'green';
  }

  getBgColor(listedgl: string): string {
    const value = parseFloat(listedgl);
    if (isNaN(value)) {
      return '#e0e0e0'; // Fallback background color if value is not a number
    }
    if (value === 0) {
      return ''; // Neutral background color for 0
    }
    return value < 0 ? '#ffcccc' : '#ccffcc'; // Colors for negative and positive values
  }

  fun(sid: number) {
    console.log('the fun clicked', sid);
  }
}

// Utility function to compare numbers
function compare(a: number, b: number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
