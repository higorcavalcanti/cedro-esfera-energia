import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent implements OnInit {

  tableData = [
    { value: 20290437.79, name: 'Contratos de compra' },
    { value: 13435745.55, name: 'Cessão de contratos' },
    { value: 7392920.63, name: 'Operação prevista' },
    { value: 7972096.15, name: 'Efeito de modulação CCEE' },
  ];

  get resultadoPrevisto() {
    if ( !this.tableData ) {
      return 0;
    }
    return this.tableData
      .map(data => data.value)
      .reduce((sum, actual) => {
        return actual + sum;
      });
  }

  constructor() { }

  ngOnInit() {
  }


}
