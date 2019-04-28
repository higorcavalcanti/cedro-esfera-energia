import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-consume-purchase-contracts',
  templateUrl: './purchase-contracts.component.html',
  styleUrls: ['./purchase-contracts.component.scss']
})
export class PurchaseContractsComponent implements OnInit {

  colunms = [
    {
      name: 'Contraparte',
    },
    {
      name: 'Contrato de compras'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
