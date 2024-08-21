import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-popup',
  templateUrl: './loading-popup.component.html',
  styleUrl: './loading-popup.component.css',
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class LoadingPopupComponent {
  // @Input() isVisible: Observable<boolean> |boolean = true;
}
