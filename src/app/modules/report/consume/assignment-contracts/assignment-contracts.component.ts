import { Component, OnInit } from '@angular/core';
import { ReportConsumeTableItemModel } from '../../../../shared/models/report-consume-table-item-model';
import { ConsumoService } from '../../../../shared/services/consumo.service';

@Component({
  selector: 'app-report-consume-assignment-contracts',
  templateUrl: './assignment-contracts.component.html',
  styleUrls: ['./assignment-contracts.component.scss']
})
export class AssignmentContractsComponent implements OnInit {


  tableData: Array<ReportConsumeTableItemModel>;

  constructor(private consumoService: ConsumoService) { }

  ngOnInit() {
    this.tableData = null;
    this.consumoService.getContratosCessao().subscribe(data => {
      this.tableData = data;
    });
  }


}
