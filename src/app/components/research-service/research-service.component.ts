import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  // props
  @Input() title!: string; //props
  @Input() serachBoxText!: string; //props
  @Input() imgSrc!: string | undefined; //props
  @Input() hideQuantityBox!: boolean; //props

  // events
  @Output() myEvent1_InputValue = new EventEmitter<string>(); //for input value
  @Output() myEvent2_Reportstate = new EventEmitter<boolean>(); //for reportState
  @Output() myEvent3_LoadingState = new EventEmitter<boolean>(); //for loadingState
  @Output() myEvent4_ChooseValue= new EventEmitter<string | undefined>();

  data: any[] = [];
  inputVal:string = 'hdfc';
  NumQuantity:undefined|number;

  filterState = false;

  constructor() {
    this.data = data;
  }

  onResponseClick(sname: string) {
    this.myEvent2_Reportstate.emit(true);

    // this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    this.inputVal = sname;
    this.filterState = true;

    // setTimeout(() => {
    //   this.myEvent2_Reportstate.emit(false);
    //   console.log('onResponseClicked : ', sname);

    //   this.myEvent3_LoadingState.emit(true); //hide loading true
    //   this.myEvent1_InputValue.emit(this.inputVal);
    //   this.inputVal = '';
    // }, 3000);
  }

  //search box clicked
  OnHandleClick() {
    this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    console.log('hello there input value have sended', this.inputVal);

    // setTimeout(() => {
      this.myEvent2_Reportstate.emit(false);
      this.myEvent3_LoadingState.emit(true); //hide loading true
      this.myEvent1_InputValue.emit(this.inputVal);
      this.inputVal = '';
    // }, 3000);
  }

  onInputClick() {
    this.filterState = false;
    this.myEvent4_ChooseValue.emit(undefined);
    // this.myEvent4.emit(true);
  }

  onInputChange(event: Event) {
    // Cast event.target to HTMLInputElement to access the value property
    console.log("oninputchange")
    this.inputVal = (event.target as HTMLInputElement).value;
    // this.myEvent1_InputValue.emit(this.inputVal); // Emitting the updated input value
  }
}
