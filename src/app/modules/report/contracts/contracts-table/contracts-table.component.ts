import { Component, OnInit } from '@angular/core';
import {ContractsService} from '../../../../shared/services/contracts.service';
import {ReportContractsTableItemModel} from '../../../../shared/models/report-contracts-table-item-model';

@Component({
  selector: 'app-report-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent implements OnInit {

  tableData: Array<ReportContractsTableItemModel>;

  get resultadoPrevisto() {
    if ( !this.tableData || !this.tableData.length ) {
      return 0;
    }
    return this.tableData
      .map(data => data.value)
      .reduce((sum, actual) => actual + sum);
  }

  constructor(private contractsService: ContractsService) { }

  ngOnInit() {
    this.tableData = [];
    this.contractsService.getData().subscribe(data => {
      this.tableData = data;
    });
  }


}
