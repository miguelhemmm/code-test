import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getInfo(): BillingData {
    return {
      invoiceNum: '00003526',
      invoiceType: 'Receipt',
      restaurant: 'Monty\'s Cheese Shop',
      subtotal: '1300.00',
      tax: '26.32',
      postingDate: '07-14-2017',
      invoiceDate: '07-09-2017',
      dueDate: '09-09-2017',
      total: '10000',
        lineItems: [
          {name: 'Gruyere-greyzer', quantity: '3', unitPrice: '1', total: '328.07'},
          {name: 'Gruyere-greyzer', quantity: '3', unitPrice: '1', total: '328.07'},
          {name: 'Gruyere-greyzer', quantity: '3', unitPrice: '1', total: '328.07'},
          {name: 'Gruyere-greyzer', quantity: '3', unitPrice: '1', total: '328.07'}
        ],
      recentActivity: {
        date: '9:25',
        user: 'John Doe'
      }

    };
  }
}

export interface BillingData {
  invoiceNum: string;
  invoiceType: string;
  restaurant: string;
  subtotal: string;
  tax: string;
  postingDate: string;
  invoiceDate: string;
  dueDate: string;
  total: string;
    lineItems: any[];
  recentActivity: {
    date: string;
    user: string;
  }
}
