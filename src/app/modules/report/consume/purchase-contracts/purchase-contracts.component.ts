import { Component, OnInit } from '@angular/core';
import { ReportConsumeTableItemModel } from '../../../../shared/models/report-consume-table-item-model';

@Component({
  selector: 'app-report-consume-purchase-contracts',
  templateUrl: './purchase-contracts.component.html',
  styleUrls: ['./purchase-contracts.component.scss']
})
export class PurchaseContractsComponent implements OnInit {

  tableData: Array<ReportConsumeTableItemModel> = [
    {
      contraParte: 'PROINFA',
      contratos: 1669262,
      flexibilidade: {
        contratada: null,
        utilizada: 100
      },
      previsto: {
        mwh: 1629262,
        valor: 0,
        financeiro: 0
      }
    },
    {
      contraParte: 'ENGIE BR GER',
      contratos: 1488000,
      flexibilidade: {
        contratada: null,
        utilizada: 100
      },
      previsto: {
        mwh: 744000,
        valor: 18350,
        financeiro: 1365240
      }
    }
  ] ;

  constructor() { }

  ngOnInit() {
  }

}
