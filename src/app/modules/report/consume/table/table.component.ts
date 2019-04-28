import { Component, Input, OnInit } from '@angular/core';
import { ReportConsumeTableItemModel } from '../../../../shared/models/report-consume-table-item-model';

@Component({
  selector: 'app-report-consume-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableData: Array<ReportConsumeTableItemModel>;

  constructor() { }

  ngOnInit() {
  }

  getResultMwh() {
    return this.tableData
      .map(a => a.previsto.mwh)
      .reduce((sum, val) => sum + val);
  }

  getResultValor() {
    return this.tableData
      .map(a => a.previsto.valor)
      .reduce((sum, val) => sum + val);
  }

  getResultFinanceiro() {
    return  this.tableData
      .map(a => a.previsto.financeiro)
      .reduce((sum, val) => sum + val);
  }
}
