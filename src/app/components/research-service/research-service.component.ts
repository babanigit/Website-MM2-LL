import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { searchData } from '../../assets/searchData';

@Component({
  selector: 'app-research-service',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './research-service.component.html',
  styleUrl: './research-service.component.css',
})
export class ResearchServiceComponent {
  // props
  @Input() title!: string; //props
  @Input() serachBoxText!: string; //props
  @Input() imgSrc!: string | undefined; //props
  @Input() hideQuantityBox!: boolean; //props

  // events
  @Output() myEvent1_InputValue = new EventEmitter<string>(); //for input value
  @Output() myEvent2_ReportBoxState = new EventEmitter<boolean>(); //for reportState
  @Output() myEvent3_LoadingState = new EventEmitter<boolean>(); //for loadingState
  @Output() myEvent4_ChooseValue= new EventEmitter<string | undefined>();

  searchData: any[] = [];

  INPUT_VALUE_SNAME:string = 'hdfc';
  NumQuantity:undefined|number;

  FILTER_STATE = false;

  constructor() {
    this.searchData = searchData;
  }

  onLiClick(sname: string) {
    this.myEvent2_ReportBoxState.emit(true);

    // this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    this.INPUT_VALUE_SNAME = sname;
    this.FILTER_STATE = true;

    // setTimeout(() => {
    //   this.myEvent2_Reportstate.emit(false);
    //   console.log('onResponseClicked : ', sname);

    //   this.myEvent3_LoadingState.emit(true); //hide loading true
    //   this.myEvent1_InputValue.emit(this.INPUT_VALUE_SNAME);
    //   this.INPUT_VALUE_SNAME = '';
    // }, 3000);
  }


  //search box clicked
  OnSubmitClick() {
    this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    // console.log('hello there input value have sended', this.INPUT_VALUE_SNAME);

    // setTimeout(() => {
      this.myEvent2_ReportBoxState.emit(false);
      this.myEvent3_LoadingState.emit(true); //hide loading true
      this.myEvent1_InputValue.emit(this.INPUT_VALUE_SNAME);

      this.INPUT_VALUE_SNAME = '';
    // }, 3000);
  }

  onInputBoxClick() {
    this.FILTER_STATE = false;
    this.myEvent4_ChooseValue.emit(undefined);
    // this.myEvent4.emit(true);
  }

  onInputValueChange(event: Event) {
  }
}
