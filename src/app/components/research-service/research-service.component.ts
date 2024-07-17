import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
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

  @Output() myEvent3 = new EventEmitter<boolean>();

  filterState = false;
  inputVal = '';
  data: any[] = [];
  hero: any;

  constructor() {
    this.data = data;
  }

  onResponseClick(sname?: string) {
    this.myEvent2.emit(false);
    this.myEvent3.emit(false);
    this.filterState = true;

    setTimeout(() => {
      this.myEvent3.emit(true);
      console.log('onResponseClicked : ', sname);
      this.myEvent.emit(this.inputVal);
      this.inputVal = '';
    }, 3000);
  }

  onInputClick() {
    this.filterState = false;
  }

  OnHandleClick() {
    console.log('hello there input value have sended', this.inputVal);
  }
}
