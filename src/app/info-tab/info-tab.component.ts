import { BillingData } from './../shared/data-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})

export class InfoTabComponent implements OnInit {

  @Input() billingData: BillingData;

  tabSelected: string = 'list';

  constructor() { }

  ngOnInit() {
  }

  onChangeTab(value) {
    this.tabSelected = value;
  }

}
