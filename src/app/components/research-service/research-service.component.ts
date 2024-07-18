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
  @Output() myEvent_InputValue = new EventEmitter<string>(); //for input value
  @Output() myEvent2_Reportstate = new EventEmitter<boolean>(); //for reportState
  @Output() myEvent3_LoadingState = new EventEmitter<boolean>(); //for loadingState


  filterState = false;
  inputVal = '';
  data: any[] = [];
  hero: any;

  constructor() {
    this.data = data;
  }

  get filteredHeroes() {
       //filtered the data which haves tag="stock"
       let onlyStock:any[] = data.filter(item => item.tag === 'Stock');

       this.inputVal = this.inputVal.toLowerCase();

       //filtering as per search text
       let getCompany:any[] = onlyStock.filter(item => {
         return item.Company.toLowerCase().includes(this.inputVal);
       });

       console.log("the data is : ",getCompany)

       return getCompany;
  }

  onResponseClick(sname?: string) {
    this.myEvent2_Reportstate.emit(true);
    this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    this.filterState = true;

    setTimeout(() => {
      this.myEvent2_Reportstate.emit(false);

      this.myEvent3_LoadingState.emit(true); //hide loading true
      console.log('onResponseClicked : ', sname);
      this.myEvent_InputValue.emit(this.inputVal);
      this.inputVal = '';
    }, 3000);
  }

  onInputClick() {
    this.filterState = false;
    this.myEvent2_Reportstate.emit(true);

    // this.myEvent4.emit(true);
  }

  OnHandleClick() {
    console.log('hello there input value have sended', this.inputVal);
  }
}
