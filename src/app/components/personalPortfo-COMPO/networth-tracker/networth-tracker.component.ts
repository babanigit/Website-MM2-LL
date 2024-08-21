import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-networth-tracker',
  templateUrl: './networth-tracker.component.html',
  styleUrl: './networth-tracker.component.css',
  standalone:true
})
export class NetworthTrackerComponent implements OnInit {


  selectedMenu: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedMenu = params['selected_menu'];
      // Handle the selectedMenu value as needed
      console.log('Selected Menu:', this.selectedMenu); // For debugging

    });

  }

}
