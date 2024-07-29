import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { JsonDataService } from '../../services/json-data.service';
import { Subscription } from 'rxjs';
import { IGetDropdown } from '../../models/interfaces';

@Component({
  selector: 'app-research-service',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './research-service.component.html',
  styleUrl: './research-service.component.css',
})


export class ResearchServiceComponent implements OnInit {
  // props
  @Input() title!: string; //props
  @Input() serachBoxText!: string; //props
  @Input() imgSrc!: string | undefined; //props
  @Input() hideQuantityBox!: boolean; //props

  // events
  @Output() myEvent1_InputValue = new EventEmitter<string>(); //for input value
  @Output() myEvent2_ReportBoxState = new EventEmitter<boolean>(); //for reportState
  @Output() myEvent3_LoadingState = new EventEmitter<boolean>(); //for loadingState
  @Output() myEvent4_ChooseValue = new EventEmitter<string | undefined>();

  @Output() myEvent5_InputId = new EventEmitter<string>(); //for input value

  searchData: IGetDropdown[] = [];

  INPUT_VALUE_SNAME: string = 'hdfc';
  INPUT_VALUE_ID: string = "";

  NumQuantity: undefined | number;

  FILTER_STATE = false;

  loadingState = false;

  private loadingSubscription: Subscription | undefined;

  constructor(
    private serv: JsonDataService
  ) {
    // this.searchData = searchData;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loadingSubscription = this.serv.getLoadingState().subscribe((data) => {
      this.loadingState = data;
    });
    this.fetchGetDropdown();
  }

  fetchGetDropdown() {
    this.serv.getDROPDOWN().subscribe((res: IGetDropdown[]) => this.searchData = res
    );
  }

  onLiClick(sname: string, Id: number) {
    this.myEvent2_ReportBoxState.emit(true);

    // this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    this.INPUT_VALUE_SNAME = sname;
    this.INPUT_VALUE_ID = Id.toString();

    this.FILTER_STATE = true;


    // setTimeout(() => {
    //   this.myEvent2_ReportBoxState.emit(false);
    //   console.log('onResponseClicked : ', sname);

    //   this.myEvent3_LoadingState.emit(true); //hide loading true
    //   this.myEvent1_InputValue.emit(this.INPUT_VALUE_SNAME);
    //   this.INPUT_VALUE_SNAME = '';
    // }, 3000);
  }


  //search box clicked
  OnSubmitClick() {

    // this.fetchGetDropdown();


    this.myEvent3_LoadingState.emit(false); //on click unhidden loading
    // console.log('hello there input value have sended', this.INPUT_VALUE_SNAME);

    setTimeout(() => {
      this.myEvent2_ReportBoxState.emit(false);
      this.myEvent3_LoadingState.emit(true); //hide loading true
      this.myEvent1_InputValue.emit(this.INPUT_VALUE_SNAME);
      this.myEvent5_InputId.emit(this.INPUT_VALUE_ID);

      this.INPUT_VALUE_SNAME = '';
    }, 500);
  }

  onInputBoxClick() {
    this.FILTER_STATE = false;
    this.myEvent4_ChooseValue.emit(undefined);
    // this.myEvent4.emit(true);
  }

  onInputValueChange(event: Event) {
  }
}
