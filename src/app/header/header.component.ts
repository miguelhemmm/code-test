import { BillingData, DataService } from './../shared/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleChevron = false;
  billingData: BillingData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.billingData = this.dataService.getInfo();
  }

  toggleItem(): void {
    this.toggleChevron = !this.toggleChevron;
  }

}
