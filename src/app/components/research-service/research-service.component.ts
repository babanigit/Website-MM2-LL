import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FilterPipe } from '../../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { data } from '../../assets/data';

@Component({
  selector: 'app-research-service',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './research-service.component.html',
  styleUrl: './research-service.component.css',
})
export class ResearchServiceComponent {
  @Output() myEvent = new EventEmitter<string>();
  @Output() myEvent2 = new EventEmitter<boolean>();

  filterState = false;
  inputVal = '';
  data: any[] = [];
  hero: any;

  constructor() {
    this.data = data;
  }


  onResponseClick(sname?: string) {
    console.log('onResponseClicked : ', sname);
    this.myEvent.emit(this.inputVal);
    this.myEvent2.emit(false);
    this.filterState = true;
    this.inputVal = '';
  }

  onInputClick() {
    this.filterState = false;
  }

  OnHandleClick() {
    console.log('hello there input value have sended', this.inputVal);
  }
}
