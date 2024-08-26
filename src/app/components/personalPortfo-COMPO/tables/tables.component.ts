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

  TYPE: 'overview' | 'holding' | 'price' | 'contri' = 'holding';
  private dataCache: { [key: string]: any[] | undefined } = {};

  ngOnInit() {
    this.getColums('holding');
    this.fetchStocks('holding');
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

  private fetchStocks(type: 'overview' | 'holding') {
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

  updateStocks(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    this.dataSource2.data = this.dataCache[type] || [];
  }

  getColums(type: 'overview' | 'holding' | 'price' | 'contri'): void {
    switch (type) {
      case 'overview':
        this.displayedColumns = ['short', 'score'];
        break;
      case 'holding':
        this.displayedColumns = [
          'short',
          'score',
          'latest_Price',
          'iprice',
          'dgain',
          'unrgain',
          'lval',
        ];
        break;
      case 'price':
        this.displayedColumns = ['short', 'score'];
        break;
      case 'contri':
        this.displayedColumns = ['short', 'score'];
        break;
    }
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

      // Convert values to numbers
      // if (sortState.active === 'techScore') {
      //   valueA = +a.dotsum.tech_score || 0;
      //   valueB = +b.dotsum.tech_score || 0;
      // } else {
      valueA = +a.dotsum[sortState.active] || 0;
      valueB = +b.dotsum[sortState.active] || 0;
      // }

      console.log(
        `Comparing ${valueA} with ${valueB} for column ${sortState.active}`
      );
      return compare(valueA, valueB, isAsc);
    });
  }

  // latest price
  // specially for latest price cause it has two data inside
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
}

// Utility function to compare numbers
function compare(a: number, b: number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
