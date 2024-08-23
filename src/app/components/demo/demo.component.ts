import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { JsonDataService } from '../../services/json-data.service';
import { GetPersonalPFService } from '../../services/personal-portfolio/get-personal-pf.service';
import { IGetOverview } from '../../models/overview';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'], // Corrected
  standalone: true,
  imports: [
    MatSortModule,
    MatTableModule, // Corrected
    CommonModule,
    // NoopAnimationsModule
    // BrowserAnimationsModule
  ],
})
export class DemoComponent implements OnInit, AfterViewInit {

  private _liveAnnouncer = inject(LiveAnnouncer);

  // private dataService = inject(JsonDataService);
  private serv = inject(GetPersonalPFService);

  displayedColumns: string[] = ['sid', 'sname', 'short', 'mcap'];
  // dataSource = new MatTableDataSource<PeriodicElement>([]);
  dataSource2 = new MatTableDataSource<any>([]);

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
    // this.loadData();
    this.loadData2();
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource2.sort = this.sort;

  }

  // private loadData() {
  //   this.dataService.getTrail().subscribe((data) => {
  //     this.dataSource.data = data;
  //   });
  // }

  private loadData2() {
    this.serv.getOverviewStocks('holding').subscribe( {

      next: (response) => {

        const elements = Object.values(response.data.list); // Convert the object values to an array
        this.dataSource2.data = elements;

        console.log("the elements is : ",elements)
      },
      error: (err) => {
        console.error('Failed to load data', err);
        // Optionally handle the error in your UI
      }

    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
